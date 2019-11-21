import { Todo } from './../../modeles/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  todo = new Todo();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  addTodo(formulaire: NgForm) {
   console.log(this.todoService.addToDo(formulaire.value)) ;
  }
}
