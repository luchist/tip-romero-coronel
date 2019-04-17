import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  clicked : Boolean;

  constructor() {
    this.clicked = false;
   }

  ngOnInit() {
  }

  isClicked(){
    if (this.clicked) {
      document.body.classList.remove('drawing');
      document.body.classList.add('notDrawing')
    }
    else {
      document.body.classList.add('drawing');
      document.body.classList.remove('notDrawing');
    }

    this.clicked = !this.clicked
  }

}
