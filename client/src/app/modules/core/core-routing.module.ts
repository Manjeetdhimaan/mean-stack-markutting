import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { TermsComponent } from './components/terms/terms.component';
import { RefundComponent } from './components/refund/refund.component';
import { PrivacyComponent } from './components/privacy/privacy.component';


const routes: Routes = [
    {
        path: '', component: HomeComponent, pathMatch: 'full', data: {title: 'Buy Views, Likes, Subscribers'}
    },
    {
        path: 'about', component: AboutComponent, data: {title: 'About us'}
    },
    {
        path: 'contact', component: ContactComponent, data: {title: 'Contact us'}
    },
    {
        path: 'user/terms', component: TermsComponent, data: {title: 'User Terms and Conditions'}
    },
    {
        path: 'user/refund', component: RefundComponent, data: {title: 'User Refund Policy'}
    },
    {
        path: 'user/privacy', component: PrivacyComponent, data: {title: 'User Privacy Policy'}
    }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
