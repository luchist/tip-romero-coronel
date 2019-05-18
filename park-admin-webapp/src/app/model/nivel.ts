import {Conjunto} from './conjunto';


export class Nivel {
  numero: number;
  orientacion: Orientacion;
  conjuntos: Conjunto[];

  constructor(numero: number) {
    this.numero = numero;
    this.orientacion = Orientacion.Vertical;
    this.conjuntos = [];
  }
}


enum Orientacion {
  Horizontal,
  Vertical,
}
