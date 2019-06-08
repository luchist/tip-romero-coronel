import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelUsuarioComponent } from './nivel-usuario.component';

describe('NivelUsuarioComponent', () => {
  let component: NivelUsuarioComponent;
  let fixture: ComponentFixture<NivelUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
