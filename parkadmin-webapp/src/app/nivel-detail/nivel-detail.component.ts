import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nivel-detail',
  templateUrl: './nivel-detail.component.html',
  styleUrls: ['./nivel-detail.component.css']
})
export class NivelDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  draw() {
    const canvas = document.getElementById('nivel') as HTMLCanvasElement;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      ctx.moveTo(10, 90);
      ctx.lineTo(10, 10);
      ctx.lineTo(60, 10);
      ctx.lineTo(60, 90);

      ctx.stroke();
      console.log('click!');
    }

  }

}
