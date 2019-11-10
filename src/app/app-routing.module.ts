import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FlowManagementComponent } from './flow-management/flow-management.component';
import { OktaLoginComponent } from './okta-login/okta-login.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

export function onAuthRequired({ router }) {
  // Redirect the user to your custom login page
  router.navigate(['/okta-login']);
}

// function redirect({ router }) {
//   router.navigate(['/flow-management']);
// }

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [ OktaAuthGuard ],
    data: {
      onAuthRequired
    }
  },
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
