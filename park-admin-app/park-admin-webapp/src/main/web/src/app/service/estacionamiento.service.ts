import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ESTAC} from '../mock-estac';
import {Nivel} from '../model/nivel';
import {Conjunto} from '../model/conjunto';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {
  nivelSeleccionado: Nivel;

  constructor() {
    this.nivelSeleccionado = new Nivel(2);
    const conjuntos = [
      new Conjunto(20, 10, 100, 20),
      new Conjunto(20, 60, 50, 20),
      new Conjunto(60, 90, 30, 20)
    ] ;
    this.nivelSeleccionado.conjuntos = conjuntos;
  }

  getNiveles(): Observable<Nivel[]> {
    return of(ESTAC.niveles);
  }

  /*crearConjunto(conj, nivel){
    lo hace en el backend y recibe un conjunto a dibujar con las nuevas medidas o sino un error o alerta;
  }
*/

  crearConjunto(conj: { ancho: number; x: number; y: number; largo: number }) {
    if (! this.esTamanioAdecuado(this.nivelSeleccionado, conj)) {
      // tirar notificacion de tamanio no adecuado
    }
    if (this.estaEspacioOcupado(conj, this.nivelSeleccionado.numero)) {
      // tirar notificacion que esa ocupado ese lugar!
    }
    if (this.nivelSeleccionado[0] !== undefined) {
      conj.largo = this.nivelSeleccionado[0].largo;
    }
    this.juntarVecinos(this.nivelSeleccionado, conj); // vecino;
    // agrego al modelo
    return conj; // ya para dibujarse
  }

  esTamanioAdecuado(nivelSeleccionado: Nivel, conj: { ancho: number; x: number; y: number; largo: number }) {
    return conj.ancho >= 120 && conj.largo >= 55;
  }

  estaEspacioOcupado(conj: { ancho: number; x: number; y: number; largo: number }, numero: number) {
    const seSuperponen = (conj1, conj2) => {
      return !(conj1.x > (conj2.x + conj2.w) ||
        (conj1.x + conj1.w) < conj2.x ||
        conj1.y > (conj2.y + conj2.h) ||
        (conj1.y + conj1.h) < conj2.y);
    };
    return this.nivelSeleccionado.conjuntos.find((c) => seSuperponen(c, conj));
  }

  juntarVecinos(nivelSeleccionado: Nivel, conj: { ancho: number; x: number; y: number; largo: number }) {
    const estaAlLado = (conj1, conj2) => {
      const h = conj1.x - conj2.x + conj2.ancho <= conj1.largo * 0.75;
      const v = conj1.y - conj2.y + conj2.largo <= conj1.largo * 0.75;
      };
    const esVecino = (conj1, conj2) => {
      const v = conj1.y >= conj2.y && conj1.y + conj1.largo <= conj2.y + conj2.largo;
      const h = conj1.x >= conj2.x && conj1.x + conj1.ancho <= conj2.x + conj2.ancho;
    };

  }

}
