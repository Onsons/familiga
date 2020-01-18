import { Todo } from './../../modeles/todo';
import { AngularFireDatabase } from 'angularfire2/database';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { runInThisContext } from 'vm';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition('void => *', [
        animate(2000)
      ]),
    ])
  ]
})
export class TodoItemComponent implements OnInit {
  todos;
  idUser = this.service.userId;
  c;
  show = false;
  t;
  constructor(private service: TodoService, private db: AngularFireDatabase,
    private toastr: ToastrService) {}
  ngOnInit() {
    this.service.getToDo().subscribe(data => {
      this.todos = data.map(element => {
        return {
          id: element.payload.doc.id,
          ... element.payload.doc.data(),
        };
      });
      console.log(this.todos);
    });
  }
  deleteTask(index) {
    this.service.deleteTask(index);
    this.toastr.success('Tache supprimée avec succes !', 'Suppression');
  }
  editerTask(id, form) {
   console.log(form);
   this.service.editTask(id, form);
   this.toastr.success('Tache mise à jour avec succes ! ', 'Edit');
}
chechedOrUncheked(id, flag) {
  this.service.checkedOrUnchecked(id, !flag);
  this.deleteTask(id);
}
showEdit(t) {
  this.show = true;
  this.t = t;
  console.log(this.todos);
}
}
