import {Nivel} from './nivel';

export class Estacionamiento {
  nombre: string;
  id: string;
  niveles: Nivel[];

  constructor(nombre: string, id: string, niveles: Nivel[]) {
    this.nombre = nombre;
    this.id = id;
    this.niveles = niveles;
  }
}
