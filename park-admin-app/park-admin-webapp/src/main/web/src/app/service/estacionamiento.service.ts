import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ESTAC} from '../mock-estac';
import {Estacionamiento} from '../model/estacionamiento';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  constructor() { }

  getEstac(): Observable<Estacionamiento> {
    return of(ESTAC);
  }

}
