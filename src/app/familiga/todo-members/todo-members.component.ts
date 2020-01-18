import { User } from 'src/app/user.interface';
import { Todo } from 'src/app/modeles/todo';
import { TodoService } from './../../services/todo.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-members',
  templateUrl: './todo-members.component.html',
  styleUrls: ['./todo-members.component.css']
})
export class TodoMembersComponent implements OnInit {
  todos;
  members;
  idFamily = '';
  id;
  p = 'publique';
  notif;
  username;
  isExpanded = false;
  addState = false;
  membre: User;
  todo: Todo;
  constructor(private userService: UserService, private todoService: TodoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.todoService.getNotifi().subscribe(d => {
      this.notif = d.map( t => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as {any}
        };
      });
  });
   // this.userService.getUserById(this.notif.userIdAdd).subscribe(data => this.username = data.username);
    this.userService.getCurrentUser().subscribe(data => this.idFamily = data['idFamily'] );
    this.userService.getMembers().subscribe(data => {
      this.members = data.map(  c => {
        return {
          id: c.payload.doc.id,
          ...c.payload.doc.data() as {any}
        };
      }
      ).filter(m => ((m['idFamily'] === this.idFamily) && (m.id !== this.todoService.userId)));
    // this.members = this.members.filter(m => ((m.idFamily === this.idFamily) && (m.id !== this.todoService.userId)));
    }
    );
  }
  toggle(id, tb) {
    this.membre = tb;
    this.todoService.getMembersToDo(id).subscribe(d => {
      this.todos = d.map( t => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as {any}
        };
      }).filter(m => m['type'] === 'publique');
    });
    this.isExpanded = !this.isExpanded;
    this.addState = false;
  }
  addTodoM(form) {
   console.log(form);
   this.todoService.addToDoM(form);
   console.log('done');
  }
  addNotif(data) {
    this.todoService.addNotif(data);
    this.toastr.info('Demande en cours' , 'Demande d\'ajout');
  }
addTask(m) {
  this.addState = true;
  this.membre = m;
  this.isExpanded = false;
}
add(n) {
  this.todoService.addToDoM(n);
}
}
