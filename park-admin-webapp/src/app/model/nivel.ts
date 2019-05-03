import { Espacio } from './espacio';
import { Auto } from './espacio';

export class Nivel {
  numero: number;
  ancho: number;
  alto: number;
  espacios: Espacio[];

  constructor(numero: number, ancho: number, alto: number) {
    this.numero = numero;
    this.ancho = ancho;
    this.alto = alto;
    this.espacios = [];
  }

  agregarEspacio() {
    this.espacios.push(new Auto());
  }
}
