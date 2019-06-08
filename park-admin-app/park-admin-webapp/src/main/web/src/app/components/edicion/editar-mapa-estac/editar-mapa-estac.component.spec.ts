import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMapaEstacComponent } from './editar-mapa-estac.component';

describe('EditarMapaEstacComponent', () => {
  let component: EditarMapaEstacComponent;
  let fixture: ComponentFixture<EditarMapaEstacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMapaEstacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMapaEstacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
