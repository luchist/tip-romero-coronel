import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelUsuarioToolbarComponent } from './nivel-usuario-toolbar.component';

describe('NivelUsuarioToolbarComponent', () => {
  let component: NivelUsuarioToolbarComponent;
  let fixture: ComponentFixture<NivelUsuarioToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelUsuarioToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelUsuarioToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
