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

  constructor() {
    this.clicked = false;
   }

  ngOnInit() {
  }

  isClicked() {
    if (this.clicked) {
      document.body.classList.remove('drawing');
      document.body.classList.add('notDrawing');
    } else{
      document.body.classList.add('drawing');
      document.body.classList.remove('notDrawing');
    }

    this.clicked = !this.clicked;
  }

}
