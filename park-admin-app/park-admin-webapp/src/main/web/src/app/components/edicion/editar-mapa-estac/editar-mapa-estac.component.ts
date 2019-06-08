import { Component, OnInit } from '@angular/core';
import {Estacionamiento} from '../../../model/estacionamiento';
import {Nivel} from '../../../model/nivel';
import {EstacionamientoService} from '../../../service/estacionamiento.service';
import {ESTAC} from '../../../mock-estac';

@Component({
  selector: 'app-estac',
  templateUrl: './editar-mapa-estac.component.html',
  styleUrls: ['./editar-mapa-estac.component.scss']
})
export class EditarMapaEstacComponent implements OnInit {
  estac: Estacionamiento;
  nivelSeleccionado: Nivel;
  cantDeNiveles: number;

  constructor(private estacService: EstacionamientoService) {}

  ngOnInit() {
    this.estacService.getEstac()
      .subscribe(e => this.estac = ESTAC);
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
    const nuevoNivel = new Nivel(this.cantDeNiveles + 1);
    this.estac.agregarNivel(nuevoNivel);
    this.cantDeNiveles += 1;
    this.irAlNivel(this.cantDeNiveles);
  }

  eliminarNivel() {
    if (this.cantDeNiveles > 1) {
      this.estac.eliminarNivel();
      this.cantDeNiveles -= 1;
      this.irAlNivel(this.cantDeNiveles);
    }
  }

}
