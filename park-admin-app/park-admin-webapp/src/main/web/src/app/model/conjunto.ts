import {Espacio} from './espacio';

export class Conjunto {
  x: number;
  y: number;
  ancho: number;
  largo: number;
  espacios: Espacio[];

  constructor(x: number, y: number, ancho: number, largo: number) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.largo = largo;
    this.espacios = [];
  }

}
