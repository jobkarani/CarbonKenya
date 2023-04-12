import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecontactComponent } from './homecontact/homecontact.component';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomecontactComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ContactModule { }
