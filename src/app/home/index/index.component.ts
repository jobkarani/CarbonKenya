import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private meta: Meta) {}

  ngOnInit(){
    this.meta.addTags([ 
      { name: 'description', content: 'This an African Carbon Market' }, 
      { name: 'keywords', content: 'rafiki carbon, rafiki carbon market, kenyan carbon market, rafiki, carbon market, net zero, net zero africa, african carbon' } 
  ]);
  }

}
