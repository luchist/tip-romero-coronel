import {Estacionamiento} from './model/estacionamiento';
import {Nivel} from './model/nivel';


const niveles: Nivel[] = [
  new Nivel(1),
  new Nivel(2),
  new Nivel(3),
  new Nivel(4),
  new Nivel(5),
];

export const ESTAC: Estacionamiento = new Estacionamiento('estacionamiento-1', '12324f3', niveles);
