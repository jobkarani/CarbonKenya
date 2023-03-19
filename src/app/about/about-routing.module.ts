import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutComponent } from './about.component';
const routes: Routes = [
  {
    path: '',
    component: AboutComponent ,
    children: [
        {path:"",component: AboutHomeComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}