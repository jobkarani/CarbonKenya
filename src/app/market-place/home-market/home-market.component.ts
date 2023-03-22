import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Market } from 'src/app/interfaces/market';

@Component({
  selector: 'app-home-market',
  templateUrl: './home-market.component.html',
  styleUrls: ['./home-market.component.css']
})
export class HomeMarketComponent implements OnInit{
  
  constructor(private http:HttpClient) {}

  market:Market[] = [];

  ngOnInit(): void {
    this.http.get<Market[]>('https://carbonke-be-production.up.railway.app/project/').subscribe(data =>{
      this.market = data;
      console.log(data);
    })
  }
}
