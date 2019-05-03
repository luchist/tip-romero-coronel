import {Estacionamiento} from './model/estacionamiento';
import {Nivel} from './model/nivel';


const niveles: Nivel[] = [
  new Nivel(0, 80, 60),
  new Nivel(1, 50, 50),
  new Nivel(2, 100, 50),
  new Nivel(3, 50, 25),
  new Nivel(4, 50, 25),
];

export const ESTAC: Estacionamiento = new Estacionamiento('estacionamiento-1', '12324f3', niveles);
