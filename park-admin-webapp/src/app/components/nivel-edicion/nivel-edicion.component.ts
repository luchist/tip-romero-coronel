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
  @ViewChild('nivel-mapa') nivelMapa: ElementRef;
  private context: CanvasRenderingContext2D;
  private nivelMapaDimensiones: [number, number];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.context = (this.nivelMapa.nativeElement as HTMLCanvasElement).getContext('2d');

    const ancho = (this.nivelMapa.nativeElement as HTMLCanvasElement).width;
    const largo = (this.nivelMapa.nativeElement as HTMLCanvasElement).height;
    this.nivelMapaDimensiones = [ancho, largo];

    this.crearMapa();
  }

  agregarConjunto() {
    const nroConjunto = this.nivel.conjuntos.length + 1;
    this.nivel.conjuntos.push(new Conjunto(nroConjunto));
  }

  private crearMapa() {

  }

  agregarEspacio(dimensiones: [number, number]) {

  }

}
