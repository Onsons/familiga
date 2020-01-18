import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-familiga',
  templateUrl: './familiga.component.html',
  styleUrls: ['./familiga.component.css']
})
export class FamiligaComponent implements OnInit {

  constructor(private as: AuthService) { }

  ngOnInit() {

}

}
