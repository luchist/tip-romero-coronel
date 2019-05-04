import { Component, OnInit } from '@angular/core';
import {Estacionamiento} from '../../model/estacionamiento';
import {Nivel} from '../../model/nivel';
import {ESTAC} from '../../mock-estac';

@Component({
  selector: 'app-estac',
  templateUrl: './estac.component.html',
  styleUrls: ['./estac.component.scss']
})
export class EstacComponent implements OnInit {
  estac: Estacionamiento;
  nivelSeleccionado: Nivel;
  cantDeNiveles: number;

  constructor() {
  }

  ngOnInit() {
    this.estac = ESTAC;
    this.cantDeNiveles = this.estac.niveles.length;
    this.irAlNivel(1);
  }

  irAlNivel(nivel: number) {
    this.nivelSeleccionado = this.estac.getNivelConNumero(nivel);
  }

  irAlNivelAnterior() {
    this.irAlNivel(this.nivelSeleccionado.numero - 1);
  }

  irAlNivelSiguiente() {
    this.irAlNivel(this.nivelSeleccionado.numero + 1);
  }

  esPrimerNivel() {
    return this.nivelSeleccionado.numero === 1;
  }

  esUltimoNivel() {
    return this.nivelSeleccionado.numero === this.cantDeNiveles;
  }

  agregarNivel() {
    const nuevoNivel = new Nivel(this.cantDeNiveles + 1, 40, 60);
    this.estac.agregarNivel(nuevoNivel);
    this.cantDeNiveles += 1;
    this.irAlNivel(this.cantDeNiveles);
  }

  eliminarNivel() {

  }

}
