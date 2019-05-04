import {Component, Input, OnInit} from '@angular/core';
import {Nivel} from '../../model/nivel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss']
})
export class NivelComponent implements OnInit {
  @Input() nivel: Nivel;
  dimensionForm: FormGroup;
  initialX: number;
  initialY: number;

  constructor(private fb: FormBuilder) {
    this.initialX = 10;
    this.initialY = 90;
  }

  ngOnInit() {
    this.dimensionForm = this.fb.group({
    ancho: [null, Validators.compose([
      Validators.required, Validators.min(3)])
    ],
    alto: [null, Validators.compose([
      Validators.required, Validators.min(2)])
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
}
