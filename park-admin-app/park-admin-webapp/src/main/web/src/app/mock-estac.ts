import {Estacionamiento} from './model/estacionamiento';
import {Nivel} from './model/nivel';
import {Conjunto} from './model/conjunto';


const nivel1 = new Nivel(1);
nivel1.conjuntos = [
  new Conjunto(10, 30, 825, 100),
  new Conjunto(10, 200, 418, 100),
  new Conjunto(544, 200, 296, 100)
];

const niveles: Nivel[] = [
  nivel1,
  new Nivel(2),
  new Nivel(3),
  new Nivel(4),
  new Nivel(5),
];

export const ESTAC: Estacionamiento = new Estacionamiento('estacionamiento-1', '12324f3', niveles);
