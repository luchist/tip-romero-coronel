import {Component, Input, OnInit} from '@angular/core';
import {Nivel} from '../../model/nivel';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss']
})
export class NivelComponent implements OnInit {
  @Input() nivel: Nivel;
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
