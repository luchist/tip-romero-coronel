import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, map, tap, finalize } from 'rxjs/operators';
import {Conjunto} from '../../model/conjunto';
import {EstacionamientoService} from '../../service/estacionamiento.service';


@Component({
  selector: 'app-nivel-mapa',
  templateUrl: './nivel-mapa.component.html',
  styleUrls: ['./nivel-mapa.component.scss'],
  providers: [EstacionamientoService]
})
export class NivelMapaComponent implements AfterViewInit {
  @ViewChild('mapa') mapa: ElementRef;

  @ViewChild('efectos') efectos: ElementRef;
  private canvasDeEfectos: HTMLCanvasElement;
  private cxEfectos: CanvasRenderingContext2D;

  constructor(private estacService: EstacionamientoService) {}

  public ngAfterViewInit() {
    this.canvasDeEfectos = this.efectos.nativeElement;
    this.cxEfectos = this.canvasDeEfectos.getContext('2d');

    this.cxEfectos.lineWidth = 2;
    this.cxEfectos.strokeStyle = 'white';
    this.cxEfectos.setLineDash([5, 15]);

    this.capturarEventoDeCreacionDeConjunto();
  }


  capturarEventoDeCreacionDeConjunto() {
    let firstEvent: MouseEvent;
    const down$ = fromEvent(this.canvasDeEfectos, 'mousedown');
    const move$ = fromEvent(this.canvasDeEfectos, 'mousemove');
    const up$ = fromEvent(this.canvasDeEfectos, 'mouseup');
    const leave$ = fromEvent(this.canvasDeEfectos, 'mouseleave');

    down$.pipe(
        switchMap(() => {
          return move$
            .pipe(
              takeUntil(up$
                .pipe(
                tap((lastEvent: MouseEvent) =>
                  this.crearConjunto(
                    this.getPosition(firstEvent), this.getPosition(lastEvent))
                )
              )),
              takeUntil(leave$),
              finalize(() => this.borrarCanvas()),
              map((event: MouseEvent, i) => {
                if (i === 0) {
                  firstEvent = event;
                }
                return [firstEvent, event];
              })
            ); })
      )
      .subscribe(([firstPos, lastPos]: [MouseEvent, MouseEvent]) => {
        this.dibujarCuadradoDeCreacionDeConjunto(
          this.getPosition(firstPos), this.getPosition(lastPos));
      });
  }

  getPosition(event: MouseEvent) {
    console.log(event);
    const rect = this.canvasDeEfectos.getBoundingClientRect();
    return {x : event.clientX - rect.left,
      y: event.clientY - rect.top};
  }

  crearConjunto(firstPos: { x: number, y: number }, lastPos: { x: number, y: number }) {
    const conjuntoACrear = new Conjunto(
      firstPos.x,
      firstPos.y,
      lastPos.x - firstPos.x,
      lastPos.y - firstPos.y
    );
    const conjCreado = this.estacService.crearConjunto(conjuntoACrear);
    if (conjCreado !== undefined) {
      this.dibujarCuadrado(conjCreado.x, conjCreado.y, conjCreado.ancho, conjCreado.largo);
    }
  }

  dibujarCuadradoDeCreacionDeConjunto(firstPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.cxEfectos) { return; }
    const ancho = currentPos.x - firstPos.x;
    const largo = currentPos.y - firstPos.y;
    this.borrarCanvas();
    this.dibujarCuadrado(firstPos.x, firstPos.y, ancho, largo);
  }

  dibujarCuadrado(x, y, ancho, largo) {
    this.cxEfectos.beginPath();
    this.cxEfectos.rect(x, y, ancho, largo);
    this.cxEfectos.stroke();
  }

  borrarCanvas() {
    this.cxEfectos.clearRect(0, 0, this.canvasDeEfectos.width, this.canvasDeEfectos.height);
  }

}
