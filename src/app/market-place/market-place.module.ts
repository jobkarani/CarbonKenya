import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMarketComponent } from './home-market/home-market.component';
import { MarketPlaceComponent } from './market-place.component';
import { SharedModule } from '../shared/shared.module';
import { MarketRoutingModule } from './market-routing.module';
import { MarketDetailsComponent } from './market-details/market-details.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AdoptersComponent } from './adopters/adopters.component';



@NgModule({
  declarations: [
    MarketPlaceComponent,
    HomeMarketComponent,
    MarketDetailsComponent,
    ErrorpageComponent,
    AdoptersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarketRoutingModule
  ]
})
export class MarketPlaceModule { }
