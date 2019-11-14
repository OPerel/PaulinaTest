import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-okta-login',
  templateUrl: './okta-login.component.html',
  styleUrls: ['./okta-login.component.css']
})

export class OktaLoginComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.doLogin();
  }
}
