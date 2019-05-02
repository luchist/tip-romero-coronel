import {Nivel} from './nivel';

export class Estacionamiento {
  nombre: string;
  id: string;
  niveles: Nivel[];

  constructor() {
    this.id = Math.random().toString(36).slice(-5);
    this.nombre = 'mi-estacionamiento' + this.id;
    this.niveles = [new Nivel(0, 200, 200)];
  }

}
