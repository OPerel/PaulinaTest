import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { OktaAuthModule } from '@okta/okta-angular';

import { HttpClientModule } from '@angular/common/http';
import { FlowManagementService } from './flow-management.service';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { FlowManagementComponent } from './flow-management/flow-management.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OktaLoginComponent } from './okta-login/okta-login.component';
import { FlowManagementTableComponent } from './flow-management-table/flow-management-table.component';

const config = {
  issuer: 'https://dev-662113.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa1en37vvXcI1uwd357',
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    FlowManagementComponent,
    NavigationComponent,
    OktaLoginComponent,
    FlowManagementTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [FlowManagementService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
