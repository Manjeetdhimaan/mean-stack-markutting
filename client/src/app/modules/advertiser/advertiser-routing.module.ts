import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllvideocheckoutComponent } from './components/allvideocheckout/allvideocheckout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserAuthGuard } from 'src/app/shared/auth/user-auth.guard';


const routes: Routes = [
    {
        path: 'allvideocheckout', component: AllvideocheckoutComponent, pathMatch: 'full', data: {title: 'Order Now'}
    },
    {
        path: 'profile', component: DashboardComponent, data: {title: 'User Profile'}, canActivate: [UserAuthGuard]
    }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
],
  exports: [RouterModule]
})
export class AdvertiserRoutingModule { }
