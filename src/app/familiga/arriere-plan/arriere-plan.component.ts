import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arriere-plan',
  templateUrl: './arriere-plan.component.html',
  styleUrls: ['./arriere-plan.component.css']
})
export class ArrierePlanComponent implements OnInit {
  img: string;
  constructor() { }

  ngOnInit() {
  }
  changeBg() {
     this.img = 'yellow';
  }
}
