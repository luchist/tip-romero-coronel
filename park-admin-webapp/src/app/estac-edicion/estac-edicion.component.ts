import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import { Nivel } from '../model/nivel';

@Component({
  selector: 'app-estac-edicion',
  templateUrl: './estac-edicion.component.html',
  styleUrls: ['./estac-edicion.component.scss']
})
export class EstacEdicionComponent implements OnInit {
  pageEvent: PageEvent;
  nivelSeleccionado: Nivel;
  height: number;
  width: number;
  initialX: number;
  initialY: number;

  constructor() {
    this.initialX = 10;
    this.initialY = 90;
   }

  ngOnInit() {
  }

  draw() {
    const canvas = document.getElementById('nivel-mapa') as HTMLCanvasElement;
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
