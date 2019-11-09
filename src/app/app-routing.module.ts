import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowManagementComponent } from './flow-management/flow-management.component';
import { OktaLoginComponent } from './okta-login/okta-login.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(['/okta-login']);
}

const routes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'okta-login',
    component: OktaLoginComponent
  },
  {
    path: 'flow-management',
    component: FlowManagementComponent,
    canActivate: [ OktaAuthGuard ],
    data: {
      onAuthRequired
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
