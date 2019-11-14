import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';

import { HttpHeaders, HttpParams } from '@angular/common/http';

import { env } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*
  Couldn't get registration to work.
  this.registration gets nullified by the time prepareHttpRequest() is called.
  */
  isAuthenticated: boolean;
  registration: boolean;
  logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqv09Aq5MR5E_DnZ8e_RNkE4zTd1JWV0UQGQy5wFSm4BKxYVkg';

  widget = new OktaSignIn({
    baseUrl: env.OKTA_URL,
    authParams: {
      pkce: true
    },
    features: { registration: true },
    logo: this.logoUrl
  });

  constructor(public oktaAuth: OktaAuthService, public router: Router) {
    // Show the widget when prompted, otherwise remove it from the DOM.
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/okta-login':
            break;
          case '/flow-management':
            break;
          default:
            this.widget.remove();
            break;
        }
      }
    });
  }

  doLogin() {
    let activationToken = '';
    this.widget.renderEl({ el: '#okta-signin-container' }, (res) => {
      console.log('okta-login widget res: ', res);
      if (res.activationToken) {
        activationToken = activationToken || res.activationToken;
      }
      if (res.status === 'SUCCESS') {
        this.oktaAuth.loginRedirect('/flow-management', { sessionToken: res.session.token });
        if (activationToken) {
          this.registration = true;
        }
        // Hide the widget
        this.widget.hide();
      }
    }, (err) => {
        throw err;
    });
  }

  getIsAuthenticated() {
    return this.oktaAuth.isAuthenticated();
  }

  authState() {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  sessionId() {
    if (localStorage.sessionId) {
      return;
    }
    const sessionId = generateId(32);
    localStorage.sessionId = sessionId;
  }

  async logout() {
    // Terminates the session with Okta and removes current tokens.
    await this.oktaAuth.logout();
    this.router.navigateByUrl('/okta-login');
  }

  prepareHttprequest() {
    console.log('prepareHttprequest this.registration: ', this.registration);
    let accessToken = `Bearer ${JSON.parse(localStorage['okta-token-storage']).accessToken.accessToken}`;
    if (this.registration) {
      accessToken = 'Registration ' + accessToken;
    }
    const sessionId = localStorage.sessionId;
    const headers = new HttpHeaders().append('authorization', accessToken);
    const params = new HttpParams().set('SessionId', sessionId);
    console.log('send req to /getuserflows with accessToken header: ', headers.get('authorization').toString(),
      ';\nand sessionId param: ', params.getAll('SessionId').toString());
    return { headers, params };
  }
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
function generateId(length) {
  let result = '';
  for (let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
