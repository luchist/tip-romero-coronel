import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ESTAC} from '../mock-estac';
import {Nivel} from '../model/nivel';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {
  nivelSeleccionado: Nivel;

  constructor() { }

  getNiveles(): Observable<Nivel[]> {
    return of(ESTAC.niveles);
  }

  crearConjunto(conj: { ancho: number; x: number; y: number; largo: number }) {

  }

}
