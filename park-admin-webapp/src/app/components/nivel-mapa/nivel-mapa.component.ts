import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, map, tap, finalize } from 'rxjs/operators';
import {Conjunto} from '../../model/conjunto';


@Component({
  selector: 'app-nivel-mapa',
  templateUrl: './nivel-mapa.component.html',
  styleUrls: ['./nivel-mapa.component.scss']
})
export class NivelMapaComponent implements AfterViewInit {
  @ViewChild('mapa') mapa: ElementRef;

  @ViewChild('efectos') efectos: ElementRef;
  private canvasDeEfectos: HTMLCanvasElement;
  private cxEfectos: CanvasRenderingContext2D;

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

    fromEvent(this.canvasDeEfectos, 'mousedown')
      .pipe(
        switchMap((e, index) => {
          return fromEvent(this.canvasDeEfectos, 'mousemove')
            .pipe(
              takeUntil(
                fromEvent(this.canvasDeEfectos, 'mouseup').pipe(
                  tap((lastEvent: MouseEvent) => this.crearConjunto(this.getPosition(firstEvent),
                    this.getPosition(lastEvent))
                  )
                )),
              takeUntil(fromEvent(this.canvasDeEfectos, 'mouseleave')
              .pipe(tap(() => this.borrarCanvas()))),
              map((event: MouseEvent, i) => {
                if (i === 0) { firstEvent = event; }
                return [firstEvent, event];
              })
            ); })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        this.dibujarCuadradoDeCreacionDeConjunto(this.getPosition(res[0]), this.getPosition(res[1]));
      });

  }

  getPosition(event: MouseEvent) {
    const rect = this.canvasDeEfectos.getBoundingClientRect();
    return {x : event.clientX - rect.left,
      y: event.clientY - rect.top};
  }

  crearConjunto(firstPos: { x: number, y: number }, lastPos: { x: number, y: number }) {
    const conjunto = new Conjunto();
    conjunto.x = firstPos.x;
    conjunto.y = firstPos.y;
    conjunto.ancho = lastPos.x - firstPos.x;
    const largo = lastPos.y - firstPos.y;
  }

  dibujarCuadradoDeCreacionDeConjunto(firstPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.cxEfectos) { return; }

    const ancho = currentPos.x - firstPos.x;
    const largo = currentPos.y - firstPos.y;

    this.borrarCanvas();

    this.cxEfectos.beginPath();
    this.cxEfectos.rect(firstPos.x, firstPos.y, ancho, largo);
    this.cxEfectos.stroke();
  }

  borrarCanvas() {
    this.cxEfectos.clearRect(0, 0, this.canvasDeEfectos.width, this.canvasDeEfectos.height);
  }

}
