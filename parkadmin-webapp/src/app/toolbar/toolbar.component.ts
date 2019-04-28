import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
  <mat-toolbar color="primary">
  <mat-toolbar-row>
    <img src='assets/car-side-solid.png' alt="logo" height="42" width="42">
  </mat-toolbar-row>
  </mat-toolbar>
`,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
