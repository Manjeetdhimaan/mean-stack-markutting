import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
    {
        path: '', component: HomeComponent, pathMatch: 'full', data: {title: 'Buy Views, Likes, Subscribers'}
    },
    {
        path: 'about', component: AboutComponent, data: {title: 'About us'}
    },
    {
        path: 'contact', component: ContactComponent, data: {title: 'Contact us'}
    }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
