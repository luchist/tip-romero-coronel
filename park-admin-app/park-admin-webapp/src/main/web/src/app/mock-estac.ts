import {Estacionamiento} from './model/estacionamiento';
import {Nivel} from './model/nivel';
import {Conjunto} from './model/conjunto';


const nivel1 = new Nivel(1);
nivel1.conjuntos = [
  new Conjunto(20, 10, 100, 20),
  new Conjunto(20, 60, 50, 20),
  new Conjunto(60, 90, 30, 20)
];

const niveles: Nivel[] = [
  nivel1,
  new Nivel(2),
  new Nivel(3),
  new Nivel(4),
  new Nivel(5),
];

export const ESTAC: Estacionamiento = new Estacionamiento('estacionamiento-1', '12324f3', niveles);
