import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Nivel} from '../../model/nivel';
import {Conjunto} from '../../model/conjunto';

@Component({
  selector: 'app-nivel-edicion',
  templateUrl: './nivel-edicion.component.html',
  styleUrls: ['./nivel-edicion.component.scss']
})
export class NivelEdicionComponent implements OnInit, AfterViewInit {
  @Input() nivel: Nivel;
  conjuntoSeleccionado: Conjunto;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  private crearMapa() {

  }

  agregarEspacio(dimensiones: [number, number]) {

  }

}
