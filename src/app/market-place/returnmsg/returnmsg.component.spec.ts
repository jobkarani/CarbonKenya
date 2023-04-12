import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnmsgComponent } from './returnmsg.component';

describe('ReturnmsgComponent', () => {
  let component: ReturnmsgComponent;
  let fixture: ComponentFixture<ReturnmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnmsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
