import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-nivel-usuario',
  templateUrl: './nivel-usuario.component.html',
  styleUrls: ['./nivel-usuario.component.scss']
})
export class NivelUsuarioComponent implements OnInit {
  espacios: NodeListOf<Element>;

  constructor() { }

  ngOnInit() {
    this.espacios = document.querySelectorAll('.nivel-usuario-container div');
    this.espacios.forEach(function(espacio) {
      espacio.addEventListener('click', function() {
        if (espacio.classList.contains('ocupado')) {
          espacio.classList.remove('ocupado');
          espacio.className = 'libre';
        } else if (espacio.classList.contains('libre')) {
          espacio.classList.remove('libre');
          espacio.className = 'ocupado';
        }
      });
    });
  }

}
