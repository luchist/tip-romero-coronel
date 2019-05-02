export class Espacio {
    x: number;
    y: number;
    ancho: number;
    alto: number;

  constructor(x: number, y: number, ancho: number, alto: number) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }
}

class Auto extends Espacio {

    constructor(x: number, y: number) {
        super(x, y, 2.5, 4.5);
    }

}

class Moto extends Espacio {

    constructor(x: number, y: number) {
        super(x, y, 2.5, 1.2);
    }

}

class Discapacitado extends Espacio {

  constructor(x: number, y: number) {
    super(x, y, 3.6, 4.5);
  }

}
