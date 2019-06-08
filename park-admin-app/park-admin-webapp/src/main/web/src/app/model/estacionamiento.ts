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

  getNivelConNumero(numero: number) {
    return this.niveles.find(nivel => (nivel.numero === numero));
  }

  agregarNivel(nivel: Nivel) {
    this.niveles.push(nivel);
  }

  eliminarNivel() {
    if (this.niveles.length >= 1) {
      this.niveles.pop();
    }
  }

}
