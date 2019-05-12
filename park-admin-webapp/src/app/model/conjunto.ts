import {Espacio} from './espacio';

export class Conjunto {
  numero: number;
  espacios: Espacio[];

  constructor(numero: number) {
    this.numero = numero;
    this.espacios = [];
  }

}
