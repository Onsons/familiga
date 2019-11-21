import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Todo } from './../modeles/todo';
import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: AngularFireList<Todo>;
  selectedToDo: Todo = new Todo();
  list: Todo[];
  constructor(private firebase: AngularFireDatabase) {
   }
  getToDo() {
    this.todoList = this.firebase.list('todos');
    return this.todoList;
  }
  addToDo(todo: Todo) {
    this.list.push(todo);
  }
  deleteToDo(todo: Todo) {
    this.todoList.remove(todo.id);

  }
}
