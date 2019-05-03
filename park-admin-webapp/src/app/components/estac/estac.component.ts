import { Component, OnInit } from '@angular/core';
import {Estacionamiento} from '../../model/estacionamiento';
import {Nivel} from '../../model/nivel';
import {PageEvent} from '@angular/material';
import {ESTAC} from '../../mock-estac';

@Component({
  selector: 'app-estac',
  templateUrl: './estac.component.html',
  styleUrls: ['./estac.component.scss']
})
export class EstacComponent implements OnInit {
  estac: Estacionamiento;
  nivelSeleccionado: Nivel;
  CantDeNiveles: number;

  constructor() {
  }

  ngOnInit() {
    this.estac = ESTAC;
    this.nivelSeleccionado = this.estac.niveles[0];
    this.CantDeNiveles = this.estac.niveles.length;
  }


}
