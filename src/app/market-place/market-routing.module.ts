import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMarketComponent } from './home-market/home-market.component';
import { MarketPlaceComponent } from './market-place.component';
const routes: Routes = [
  {
    path: '',
    component: MarketPlaceComponent ,
    children: [
        {path:"",component: HomeMarketComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketRoutingModule {}