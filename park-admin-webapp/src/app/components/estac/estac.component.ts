import { Component, OnInit } from '@angular/core';
import {Estacionamiento} from '../../model/estacionamiento';

@Component({
  selector: 'app-estac',
  templateUrl: './estac.component.html',
  styleUrls: ['./estac.component.scss']
})
export class EstacComponent implements OnInit {
  estac: Estacionamiento;

  constructor() {
    this.estac = new Estacionamiento();
  }

  ngOnInit() {
  }

  pb() {
    return this.estac.niveles[0];
  }
}
