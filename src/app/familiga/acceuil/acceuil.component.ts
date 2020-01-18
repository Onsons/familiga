import { element } from 'protractor';
import { AuthService } from './../../services/auth.service';
import { Family } from './../../modeles/family';
import { AngularFirestore } from '@angular/fire/firestore';
import { Todo } from './../../modeles/todo';
import { TodoService } from './../../services/todo.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';





@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  constructor(private todoService: TodoService, private userService: UserService ,
     private fs: AngularFirestore, private as: AuthService) {
      }
  families;
  hasFami;
  uFamily;
  users;
  user;
  members;
  idFamily = '';
  auth;
  ngOnInit() {
     this.resetFormFamily();
     this.userService.getCurrentUser().subscribe(data => this.idFamily = data['idFamily']);
     this.userService.getUser().subscribe( data => this.hasFami = data['idFamily'] );
     this.userService.getMembers().subscribe(data => {
       this.members = data.map( e => {
         return {
           id: e.payload.doc.id,
           ...e.payload.doc.data() as {any} };
       });
     return  this.members = this.members.filter(m => ((m.idFamily === this.idFamily) &&
      (m.id !== this.todoService.userId) && (m.id === '')));
     }
     );
    }

  getCurrentUser() {
    this.as.isAuth().subscribe(auth => {
      if (auth) {
         return this.user.id = auth.uid;
      }
    });
  }
  resetFormFamily(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.userService.family = {
      id : null,
      familyName : '',
    };
  }
  addFamily(form) {
   const data: Family = form.value;
   this.userService.addNewFamily(data).then((family) =>  this.userService.updateUserFamily(family.id));
}

}
