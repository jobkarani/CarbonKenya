import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { HomecontactComponent } from './homecontact/homecontact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
        {path:"",component: HomecontactComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}