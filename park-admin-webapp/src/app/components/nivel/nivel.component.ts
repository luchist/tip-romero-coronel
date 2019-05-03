import {Component, Input, OnInit, Renderer2, ViewChild, ElementRef} from '@angular/core';
import {Nivel} from '../../model/nivel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Espacio } from 'src/app/model/espacio';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss']
})
export class NivelComponent implements OnInit {
  @Input() nivel: Nivel;
  @ViewChild('mapa')
  private mapa: ElementRef;
  dimensionForm: FormGroup;
  initialX: number;
  initialY: number;

  constructor(private fb: FormBuilder, private renderer: Renderer2) {
    this.initialX = 10;
    this.initialY = 90;
  }

  ngOnInit() {
    this.dimensionForm = this.fb.group({
    ancho: [this.nivel.ancho, Validators.compose([
      Validators.required, Validators.min(10)])
    ],
    alto: [this.nivel.alto, Validators.compose([
      Validators.required, Validators.min(10)])
    ],
  });
  }

  draw() {
    const canvas = document.getElementById('nivel-mapa') as HTMLCanvasElement;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      console.log('x:');
      console.log(this.initialX);

      if (this.initialX > 550) {
        this.initialX = 10;
        this.initialY += 80 + 20;
      }

      ctx.moveTo(this.initialX, this.initialY);
      ctx.lineTo(this.initialX, this.initialY - 80);

      this.initialX += 50;

      ctx.lineTo(this.initialX, this.initialY - 80);
      ctx.lineTo(this.initialX, this.initialY);
      ctx.stroke();
    }

  }

  isDisabled() {
    return this.nivel.espacios.length !== 0 || this.dimensionForm.invalid;
  }

  onSubmit() {
    this.nivel.ancho = this.dimensionForm.get('ancho').value as number;
    this.nivel.alto = this.dimensionForm.get('alto').value as number;
  }

  drawSpace() {
    this.nivel.agregarEspacio();
    let space: any;
    space = this.renderer.createElement('div');
    this.renderer.addClass(space, 'car-space');
    this.renderer.addClass(space, 'cdk-drag');
    this.renderer.setAttribute(space, 'cdkDragBoundary', '.nivel-mapa');
    this.renderer.setAttribute(space, 'cdkDrag', 'true');
    this.renderer.appendChild(this.mapa.nativeElement, space);
  }
}
