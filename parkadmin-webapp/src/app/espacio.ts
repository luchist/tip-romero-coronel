export class Espacio {
    x: number;
    y: number;
    height: number;
    width: number;

    constructor(x:number, y:number, height:number, width: number) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

}

class Auto extends Espacio {

    constructor(x: number, y: number) {
        super(x,y,4.5,2.5);
    }

}

class Moto extends Espacio {

    constructor(x: number, y: number) {
        super(x,y,2.5,1.2);
    }

}