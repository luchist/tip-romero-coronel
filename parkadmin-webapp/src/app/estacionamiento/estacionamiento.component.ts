import { Component, OnInit } from '@angular/core';
import { Nivel } from '../nivel';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css']
})
export class EstacionamientoComponent implements OnInit {
  clicked: boolean;
  nivelSeleccionado: Nivel;
  height: number;
  width: number;
  initialX: number;
  initialY: number;

  constructor() {
    this.clicked = false;
    this.initialX = 10;
    this.initialY = 90;
   }

  ngOnInit() {
  }

  isClicked() {
    if (this.clicked) {
      document.body.classList.remove('drawing');
      document.body.classList.add('notDrawing');
    } else {
      document.body.classList.add('drawing');
      document.body.classList.remove('notDrawing');
    }

    this.clicked = !this.clicked;
  }

  draw() {
    const canvas = document.getElementById('nivel') as HTMLCanvasElement;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      console.log('x:');
      console.log(this.initialX);

      if (this.initialX > 550) {
        this.initialX = 10;
        this.initialY += 80 + 20;
      }

      ctx.moveTo(this.initialX, this.initialY);
      ctx.lineTo(this.initialX, this.initialY - 80);

      this.initialX += 50;

      ctx.lineTo(this.initialX, this.initialY - 80);
      ctx.lineTo(this.initialX, this.initialY);
      ctx.stroke();
    }
  }

}
