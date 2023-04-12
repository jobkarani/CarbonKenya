import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMarketComponent } from './home-market/home-market.component';
import { MarketDetailsComponent } from './market-details/market-details.component';
import { MarketPlaceComponent } from './market-place.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AdoptersComponent } from './adopters/adopters.component';
import { ReturnmsgComponent } from './returnmsg/returnmsg.component';
const routes: Routes = [
  {
    path: '',
    component: MarketPlaceComponent ,
    children: [
        {path:"",component: HomeMarketComponent},
        {path:"market-details/:id",component: MarketDetailsComponent},
        {path:"comingsoon",component: ErrorpageComponent},
        {path:"adopters",component: AdoptersComponent},
        {path:"thanks",component: ReturnmsgComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketRoutingModule {}