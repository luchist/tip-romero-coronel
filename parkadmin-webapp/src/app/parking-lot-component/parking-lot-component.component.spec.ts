import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotComponentComponent } from './parking-lot-component.component';

describe('ParkingLotComponentComponent', () => {
  let component: ParkingLotComponentComponent;
  let fixture: ComponentFixture<ParkingLotComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingLotComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingLotComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
