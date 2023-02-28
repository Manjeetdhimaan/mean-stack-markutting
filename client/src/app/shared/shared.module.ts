import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { ContactDataComponent } from './components/reusuable-components/contact-data/contact-data.component';



@NgModule({
  declarations: [
    SafePipe,
    ContactDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    ContactDataComponent
  ]
})
export class SharedModule { }
