import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMarketComponent } from './home-market.component';

describe('HomeMarketComponent', () => {
  let component: HomeMarketComponent;
  let fixture: ComponentFixture<HomeMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
