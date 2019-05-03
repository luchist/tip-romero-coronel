import { Component, OnInit } from '@angular/core';
import {Estacionamiento} from '../../model/estacionamiento';
import {Nivel} from '../../model/nivel';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-estac',
  templateUrl: './estac.component.html',
  styleUrls: ['./estac.component.scss']
})
export class EstacComponent implements OnInit {
  estac: Estacionamiento;
  nivelSeleccionado: Nivel;

  constructor() {
    this.estac = new Estacionamiento();
    this.nivelSeleccionado = this.estac.niveles[0];
  }

  ngOnInit() {
  }

  changePage($event: PageEvent) {

  }
}
