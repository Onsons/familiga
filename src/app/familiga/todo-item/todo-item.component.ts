import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor(private service: TodoService) {}
  ngOnInit() {
  }
}
