import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseLayoutComponent } from '../components/base-layout/base-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [
    BaseLayoutComponent,
    NavbarComponent,
    FooterComponent,
    MatSnackBarModule,
  ]
})
export class SharedModule { }