import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacComponent } from './estac.component';

describe('EstacComponent', () => {
  let component: EstacComponent;
  let fixture: ComponentFixture<EstacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
