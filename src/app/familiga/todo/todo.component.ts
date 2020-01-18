import { UserService } from './../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.interface';
import { Todo } from 'src/app/modeles/todo';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  isLogged = false;
  user: User = {
  email: '',
  username: '',
  imageUser: ''
 };
 auth;
 users;
  constructor(private todoService: TodoService, private as: AuthService, private userService: UserService, 
    private toast: ToastrService) { }
 ngOnInit() {
  this.getCurrentUser();
  this.resetForm();
}
getCurrentUser() {
  this.as.isAuth().subscribe(auth => {
    if (auth) {
      console.log(auth.email);
      console.log('user logged');
      this.user.username = auth.displayName,
      this.user.email = auth.email,
      this.user.imageUser = auth.photoURL,
      console.log('user photo is ', this.user.imageUser);
      this.isLogged = true;
      return this.auth = auth.uid;
    } else {
       console.log('Not user logged');
       this.isLogged = false;
    }
  });
}
resetForm(form?: NgForm) {
  if (form != null) {
     // form.resetForm();
  }
  this.todoService.toDo = {
    id : null,
    title: '',
    type: '',
    description: '',
    checked: false,
    userId: this.todoService.userId,
  };
}
addTodo(form) {
  const data: Todo = form.value;
  this.todoService.addToDo(data);
  console.log('data is' , data.userId);
  console.log(data);
  console.log('task added');
  this.resetForm(form);
  this.toast.success('Tache ajoutée avec succes', 'Ajout Tache');
 }



}
