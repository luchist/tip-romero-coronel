import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ESTAC} from '../mock-estac';
import {Nivel} from '../model/nivel';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  constructor() { }

  getNiveles(): Observable<Nivel[]> {
    return of(ESTAC.niveles);
  }

}
