import { User } from './../user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Todo } from './../modeles/todo';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: AngularFirestoreCollection<Todo>;
  toDo: Todo;
  userId: string;
  user: Observable<User>;
  constructor(private firestore: AngularFirestore,
     private as: AuthService, private afAuth: AngularFireAuth) {
    this.as.user.subscribe(user => {
      if (user) {  this.userId = user.uid; }
    });
  }
  /* getToDo() {
    return this.firestore.collection('tasks', ref => ref.where('userId', '==', this.userId)).snapshotChanges();
  }*/
  getToDo() {
    return this.firestore.collection('tasks', ref => ref.where('userId', '==', this.userId).limit(6)).snapshotChanges();
  }
  getMembersToDo(id) {
    return this.firestore.collection('tasks', ref => ref.where('userId', '==', id)).snapshotChanges();
  }
 /* addToDo(data) {
    this.toDo.userId = this.userId;
    this.firestore.collection('tasks').add(data);
  }*/
  addToDo(data) {
    this.toDo.userId = this.userId;
    this.firestore.collection('tasks').add(data);
  }
  deleteTask(idTask: string) {
    this.firestore.collection('tasks'  , ref => ref.where('userId', '==', this.userId)).doc(idTask).delete();
  }
  editTask(id, data) {
     this.firestore.collection('tasks'  , ref => ref.where('userId', '==', this.userId)).doc(id).update(data);
  }
  addToDoM(data) {
    this.firestore.collection('tasks').add(data);
  }
  addNotif(data) {
    this.firestore.collection('notification').add(data);
  }
  getNotifi() {
    return this.firestore.collection('notification', ref => ref.where('userId', '==', this.userId).limit(5)).snapshotChanges();
  }
  checkedOrUnchecked( id, flag) {
      this.firestore.collection('tasks').doc(id).update({checked: flag});
  }
  getToDoByTitle(title) {
    return this.firestore.collection('tasks', ref => ref.where('userId', '==', this.userId).where('titre', '==', title)).snapshotChanges();
  }
}
