import { Component, OnInit } from '@angular/core';
import {CanvasWhiteboardComponent} from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-parking-lot-component',
  templateUrl: './parking-lot-component.component.html',
  styleUrls: ['./parking-lot-component.component.css'],
  viewProviders: [CanvasWhiteboardComponent]
})
export class ParkingLotComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
