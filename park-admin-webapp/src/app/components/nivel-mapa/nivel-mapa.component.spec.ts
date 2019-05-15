import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelMapaComponent } from './nivel-mapa.component';

describe('NivelMapaComponent', () => {
  let component: NivelMapaComponent;
  let fixture: ComponentFixture<NivelMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
