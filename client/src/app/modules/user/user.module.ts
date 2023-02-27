import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AllvideocheckoutComponent } from './components/allvideocheckout/allvideocheckout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    AllvideocheckoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
