import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlowManagementService  } from './flow-management.service';

import { AppComponent } from './app.component';
import { FlowManagementComponent } from './flow-management/flow-management.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowManagementComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FlowManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
