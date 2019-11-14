import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';

import { env } from '../../environments/environment';

@Component({
  selector: 'app-okta-login',
  templateUrl: './okta-login.component.html',
  styleUrls: ['./okta-login.component.css']
})
export class OktaLoginComponent implements OnInit {
  signIn: OktaAuthService;

  widget = new OktaSignIn({
    baseUrl: env.OKTA_URL,
    authParams: {
      pkce: true
    }
  });

  constructor(oktaAuth: OktaAuthService, router: Router) {
    this.signIn = oktaAuth;

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

  ngOnInit() {
    this.widget.renderEl({
      el: '#okta-signin-container'},
      (res) => {
        if (res.status === 'SUCCESS') {
          this.signIn.loginRedirect('/flow-management', { sessionToken: res.session.token });
          // Hide the widget
          this.widget.hide();
        }
      },
      (err) => {
        throw err;
      }
    );
  }
}
