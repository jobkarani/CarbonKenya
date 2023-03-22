import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMarketComponent } from './home-market/home-market.component';
import { MarketPlaceComponent } from './market-place.component';
import { SharedModule } from '../shared/shared.module';
import { MarketRoutingModule } from './market-routing.module';
import { MarketDetailsComponent } from './market-details/market-details.component';



@NgModule({
  declarations: [
    MarketPlaceComponent,
    HomeMarketComponent,
    MarketDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarketRoutingModule
  ]
})
export class MarketPlaceModule { }
