import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacEdicionComponent } from './estac-edicion.component';

describe('EstacEdicionComponent', () => {
  let component: EstacEdicionComponent;
  let fixture: ComponentFixture<EstacEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
