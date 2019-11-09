import { Injectable } from '@angular/core';

import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated;
  accessToken;

  constructor(
    public oktaAuth: OktaAuthService,
    public router: Router
  ) { }

  // async getAccessToken() {
  //   const tokenPromise = await this.oktaAuth.getAccessToken();
  //   this.accessToken = tokenPromise;
  // }

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
