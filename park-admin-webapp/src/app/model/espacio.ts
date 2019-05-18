export class Espacio {
  numero: number;
  ancho: number;
  largo: number;

  constructor(ancho: number, largo: number) {
    this.ancho = ancho;
    this.largo = largo;
  }
}

const auto: Espacio = {
  numero: 10,
  ancho: 2.5,
  largo: 4.5
};

const moto: Espacio = {
  numero: 10,
  ancho: 1.2,
  largo: 2.5
};

const discapacitado: Espacio = {
  numero: 10,
  ancho: 3.6,
  largo: 4.5
};
