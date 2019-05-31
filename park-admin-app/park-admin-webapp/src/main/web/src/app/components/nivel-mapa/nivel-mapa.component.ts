import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Conjunto} from '../../model/conjunto';
import {EstacionamientoService} from '../../service/estacionamiento.service';
import {Nivel} from '../../model/nivel';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-nivel-mapa',
  templateUrl: './nivel-mapa.component.html',
  styleUrls: ['./nivel-mapa.component.scss'],
  providers: [EstacionamientoService]
})
export class NivelMapaComponent implements AfterViewInit {
  @Input() nivelAMapear: Nivel;

  @ViewChild('mapa') mapa: ElementRef;
  @ViewChild('efectos') efectos: ElementRef;
  private canvasDeMapa: HTMLCanvasElement;
  private cxMapa: CanvasRenderingContext2D;
  private canvasDeEfectos: HTMLCanvasElement;
  private cxEfectos: CanvasRenderingContext2D;

  private firstPos: { x: number; y: number };
  private conjSeleccionado: Conjunto;

  constructor(private estacService: EstacionamientoService, private snackBar: MatSnackBar) {
  }

  public ngAfterViewInit() {
    this.canvasDeEfectos = this.efectos.nativeElement;
    this.cxEfectos = this.canvasDeEfectos.getContext('2d');
    this.cxEfectos.lineWidth = 2;
    this.cxEfectos.setLineDash([5, 15]);
    this.cxEfectos.strokeStyle = 'white';

    this.canvasDeMapa = this.mapa.nativeElement;
    this.cxMapa = this.canvasDeMapa.getContext('2d');
    this.cxMapa.lineWidth = 2;
    this.cxMapa.setLineDash([5, 15]);
    this.cxMapa.strokeStyle = 'black';

    this.crearConjuntos();
  }

  crearConjuntos() {
    this.nivelAMapear.conjuntos.forEach(c => this.dibujarCuadrado(this.cxMapa, c.x, c.y, c.ancho, c.largo));
  }

  dibujarCuadrado(contexto, x, y, ancho, largo) {
    contexto.beginPath();
    contexto.rect(x, y, ancho, largo);
    contexto.stroke();
  }

  onMouseDown(clientX: number, clientY: number) {
    this.firstPos = this.getPosition(clientX, clientY);
  }

  onMouseMove(clientX: number, clientY: number) {
    if (this.firstPos !== undefined) {
      this.crearConjunto(clientX, clientY);
    }
  }

  onMouseUp(clientX: number, clientY: number) {
    const lastPos = this.getPosition(clientX, clientY);
    if (this.estaSeleccionandoConjunto(lastPos)) {
      this.seleccionarConjunto();
    } else {
      this.guardarConjunto(lastPos);
    }
    this.firstPos = undefined;
    this.borrarCanvasDeEfectos();
  }

  onMouseOut() {
    this.firstPos = undefined;
    this.borrarCanvasDeEfectos();
  }

  getPosition(x: number, y: number) {
    const rect = this.canvasDeEfectos.getBoundingClientRect();
    return {
      x: x - rect.left,
      y: y - rect.top
    };
  }

  borrarCanvasDeEfectos() {
    this.cxEfectos.clearRect(0, 0, this.canvasDeEfectos.width, this.canvasDeEfectos.height);
  }

  crearConjunto(clientX: number, clientY: number) {
    this.borrarCanvasDeEfectos();
    const currentPos = this.getPosition(clientX, clientY);
    const ancho = currentPos.x - this.firstPos.x;
    const largo = currentPos.y - this.firstPos.y;
    this.dibujarCuadrado(this.cxEfectos, this.firstPos.x, this.firstPos.y, ancho, largo);
  }

  guardarConjunto(lastPos: { x: number, y: number }) {
    const conjuntoACrear = new Conjunto(
      this.firstPos.x,
      this.firstPos.y,
      lastPos.x - this.firstPos.x,
      lastPos.y - this.firstPos.y
    );
    const resultado = this.estacService.crearConjunto(conjuntoACrear);
    this.snackBar.open(resultado.alerta);
    if (resultado.alerta === 'Conjunto creado!') {
      this.dibujarCuadrado(
        this.cxMapa, resultado.conjunto.x,
        resultado.conjunto.y, resultado.conjunto.ancho, resultado.conjunto.largo);
      this.nivelAMapear.conjuntos.push(resultado.conjunto);
    }
  }

  seleccionarConjunto() {
    const conjSeleccionado = this.nivelAMapear.conjuntos.find(conj => this.estaEnConjunto(this.firstPos, conj));

    if (this.conjSeleccionado !== undefined) {
      this.dibujarCuadrado(
        this.cxMapa, this.conjSeleccionado.x,
        this.conjSeleccionado.y, this.conjSeleccionado.ancho, this.conjSeleccionado.largo);
    }

    if (conjSeleccionado !== undefined && this.conjSeleccionado !== conjSeleccionado) {
      this.cxMapa.strokeStyle = 'yellow';
      this.dibujarCuadrado(
        this.cxMapa, conjSeleccionado.x, conjSeleccionado.y, conjSeleccionado.ancho, conjSeleccionado.largo);
      this.cxMapa.strokeStyle = 'black';
      this.conjSeleccionado = conjSeleccionado;
    }
  }

  estaEnConjunto(pos: { x: number; y: number }, conjunto: Conjunto) {
    const x2 = conjunto.x + conjunto.ancho;
    const y2 = conjunto.y + conjunto.largo;

    return pos.x > conjunto.x && pos.x < x2 && pos.y > conjunto.y && pos.y < y2;
}

  estaSeleccionandoConjunto(lastPos: { x: number; y: number }) {
    const minx = Math.min(this.firstPos.x, lastPos.x);
    const maxx = Math.max(this.firstPos.x, lastPos.x);
    const miny = Math.min(this.firstPos.y, lastPos.y);
    const maxy = Math.max(this.firstPos.y, lastPos.y);

    return maxx - minx <= 4 &&  maxy - miny <= 4;
  }
}
