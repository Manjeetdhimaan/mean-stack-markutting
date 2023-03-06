import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AllvideocheckoutComponent } from './components/allvideocheckout/allvideocheckout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdvertiserRoutingModule } from './advertiser-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersComponent } from './components/dashboard/orders/orders.component';

@NgModule({
  declarations: [
    AllvideocheckoutComponent,
    DashboardComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    AdvertiserRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdvertiserModule { }
