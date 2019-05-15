import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelEdicionComponent } from './nivel-edicion.component';

describe('NivelEdicionComponent', () => {
  let component: NivelEdicionComponent;
  let fixture: ComponentFixture<NivelEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
