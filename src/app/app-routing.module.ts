import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    canActivate: [],
    loadChildren: ()=> import('./home/home.module').then((m)=>m.HomeModule)
  },

  {
    path: 'about',
    canActivate: [],
    loadChildren: ()=> import('./about/about.module').then((m)=>m.AboutModule)
  },

  {
    path: 'market-place',
    canActivate: [],
    loadChildren: ()=> import('./market-place/market-place.module').then((m)=>m.MarketPlaceModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
