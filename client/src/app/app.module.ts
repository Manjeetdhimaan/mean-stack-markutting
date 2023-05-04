import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from "ngx-progressbar/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoreModule } from './modules/core/core.module';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import { SuccessComponent } from './components/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    NgProgressModule.withConfig({
      color: "black"
    }),
    NgProgressHttpModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
