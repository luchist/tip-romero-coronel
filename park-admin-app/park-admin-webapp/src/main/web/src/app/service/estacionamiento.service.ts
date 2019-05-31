import {Injectable} from '@angular/core';
import {Nivel} from '../model/nivel';
import {Conjunto} from '../model/conjunto';
import {ESTAC} from '../mock-estac';
import {Estacionamiento} from '../model/estacionamiento';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {
  nivelSeleccionado: Nivel;

  constructor() {
    this.nivelSeleccionado = ESTAC.niveles[0];
  }

  getEstac(): Observable<Estacionamiento> {
    return of(ESTAC);
  }

  crearConjunto(conj: Conjunto) {
    const resultado = {conjunto: conj, alerta: 'Conjunto creado!'};

    if (!this.esTamanioAdecuado(conj)) {
      resultado.alerta = 'Tamanio no adecuado!';
      return resultado;
    }
    if (this.estaEspacioOcupado(conj)) {
      resultado.alerta = 'Espacio ya ocupado!';
      return resultado;
    }
    if (this.nivelSeleccionado.conjuntos[0] !== undefined) {
      conj.largo = this.nivelSeleccionado.conjuntos[0].largo;
    }
    this.juntarVecinos(this.nivelSeleccionado, conj);
    return resultado;
  }

 esTamanioAdecuado(conj: Conjunto) {
    return (conj.ancho > 121 && conj.largo > 56)  || (conj.ancho < 791 && conj.largo < 214);
  }

  estaEspacioOcupado(conj: Conjunto) {
    return this.nivelSeleccionado.conjuntos.find((c) => this.seSuperponen(c, conj));
  }

  seSuperponen(conj1: Conjunto, conj2: Conjunto) {
    return !(conj1.x > (conj2.x + conj2.ancho) ||
      (conj1.x + conj1.ancho) < conj2.x ||
      conj1.y > (conj2.y + conj2.largo) ||
      (conj1.y + conj1.largo) < conj2.y);
  }

  juntarVecinos(nivelSeleccionado: Nivel, conj: Conjunto) {
    this.nivelSeleccionado.conjuntos.forEach((c) => {
      this.juntarVecinosAlaIzquierda(conj, c);
      this.juntarVecinosALaDerecha(c, conj);
      this.juntarVecinosArriba(conj, c);
      this.juntarVecinosAbajo(c, conj);
    });
  }

  juntarVecinosAlaIzquierda(conj1: Conjunto, conj2: Conjunto) {
    if (this.sonJuntablesVertical(conj1, conj2)) {
      conj1.x = conj2.x + conj2.ancho;
    }
  }

  juntarVecinosALaDerecha(conj1: Conjunto, conj2: Conjunto) {
    if (this.sonJuntablesVertical(conj2, conj1)) {
      conj1.x = conj2.x - conj1.ancho;
    }
  }

  juntarVecinosArriba(conj1: Conjunto, conj2: Conjunto) {
    if (this.sonJuntablesHorizontal(conj1, conj2)) {
      conj1.y = conj2.y + conj2.largo;
    }
  }

  juntarVecinosAbajo(conj1: Conjunto, conj2: Conjunto) {
    if (this.sonJuntablesHorizontal(conj2, conj1)) {
      conj1.y = conj2.y - conj1.largo;
    }
  }

  sonJuntablesVertical(conj1: Conjunto, conj2: Conjunto) {
    const conjx2 = conj1.x + conj1.ancho;
    const conjx4 = conj2.x + conj2.ancho;
    return this.estanCercaHaciaArriba(conj1, conj2) && this.estanALaMismaAltura(conj1.x, conjx2, conj2.x, conjx4);
  }

  sonJuntablesHorizontal(conj1: Conjunto, conj2: Conjunto) {
    const conjy2 = conj1.y + conj1.largo;
    const conjy4 = conj2.y + conj2.largo;
    return this.estanCercaHaciaLaIzq(conj1, conj2) && this.estanALaMismaAltura(conj1.y, conjy2, conj2.y, conjy4);
  }

  private estanCercaHaciaArriba(conj1: Conjunto, conj2: Conjunto) {
    const minmax: [Conjunto, Conjunto] = conj1.y > conj2.y ? [conj2, conj1] : [conj2, conj1];
    return minmax[1].y - minmax[0].y - minmax[0].largo <= conj1.largo * 0.75;
  }

  private estanCercaHaciaLaIzq(conj1: Conjunto, conj2: Conjunto) {
    const minmax: [Conjunto, Conjunto] = conj1.x > conj2.x ? [conj2, conj1] : [conj2, conj1];
    return minmax[1].x - minmax[0].x - minmax[0].ancho <= conj1.largo * 0.75;
  }

  private estanALaMismaAltura(n1, n2, n3, n4) {
    return (n1 > n3 && n1 < n4) ||
      (n2 > n3 && n2 < n4) ||
      (n3 > n1 && n3 < n2) ||
      (n4 > n1 && n4 < n2);
  }

}
