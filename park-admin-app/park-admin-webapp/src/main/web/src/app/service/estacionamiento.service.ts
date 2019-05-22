import {Injectable} from '@angular/core';
import {Nivel} from '../model/nivel';
import {Conjunto} from '../model/conjunto';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  constructor() {
    this.nivelSeleccionado = new Nivel(2);
    this.nivelSeleccionado.conjuntos = [
      new Conjunto(20, 10, 100, 20),
      new Conjunto(20, 60, 50, 20),
      new Conjunto(60, 90, 30, 20)
    ];
  }
  nivelSeleccionado: Nivel;

  crearConjunto(conj: { ancho: number; x: number; y: number; largo: number }) {
    if (!this.esTamanioAdecuado(this.nivelSeleccionado, conj)) {
      return;
    }
    if (this.estaEspacioOcupado(conj, this.nivelSeleccionado.numero)) {
      return;
    }
    if (this.nivelSeleccionado[0] !== undefined) {
      conj.largo = this.nivelSeleccionado[0].largo;
    }
    this.juntarVecinos(this.nivelSeleccionado, conj);
    return conj;
  }

 esTamanioAdecuado(nivelSeleccionado: Nivel, conj: { ancho: number; x: number; y: number; largo: number }) {
    return (conj.ancho > 121 && conj.largo > 56)  || (conj.ancho < 791 && conj.largo < 214);
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
    this.nivelSeleccionado.conjuntos.forEach((c) => {
      this.juntarVecinosAlaIzquierda(conj, c);
      this.juntarVecinosALaDerecha(c, conj);
      this.juntarVecinosArriba(conj, c);
      this.juntarVecinosAbajo(c, conj);
    });
  }

  sonJuntablesVertical(conj1, conj2) {
    return conj1.x - conj2.x + conj2.ancho <= conj1.largo * 0.75 &&
      conj1.y >= conj2.y && conj1.y + conj1.largo <= conj2.y + conj2.largo;
  }

  sonJuntablesHorizontal(conj1, conj2) {
    return conj1.y - conj2.y + conj2.largo <= conj1.largo * 0.75 &&
      conj1.x >= conj2.x && conj1.x + conj1.ancho <= conj2.x + conj2.ancho;
  }

  juntarVecinosAlaIzquierda(conj1, conj2) {
    if (this.sonJuntablesVertical(conj1, conj2)) {
      conj1.x = conj2.x + conj2.ancho;
    }
  }

  juntarVecinosALaDerecha(conj1, conj2) {
    if (this.sonJuntablesVertical(conj2, conj1)) {
      conj1.x = conj2.x - conj1.ancho;
    }
  }

  juntarVecinosArriba(conj1, conj2) {
    if (this.sonJuntablesHorizontal(conj1, conj2)) {
      conj1.y = conj2.y + conj2.largo;
    }
  }

  juntarVecinosAbajo(conj1, conj2) {
    if (this.sonJuntablesHorizontal(conj2, conj1)) {
      conj1.y = conj2.y - conj1.largo;
    }
  }

}
