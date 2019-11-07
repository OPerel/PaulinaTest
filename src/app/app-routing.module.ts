import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowManagementComponent } from './flow-management/flow-management.component';

const routes: Routes = [
  {
    path: 'flow-management',
    component: FlowManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
