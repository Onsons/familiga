import { User } from './../user.interface';
import { Family } from './../modeles/family';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  family: Family;
  userData: User;
  userId: string;
  user: Observable<firebase.User>;
  idFamily;
  members = [];
  constructor(private fs: AngularFirestore, private as: AuthService, private afAuth: AngularFireAuth) {
    this.as.user.subscribe(user => {
      if (user) {
      this.userId = user.uid;
    }
    });
    this.members = [ 'Ons', 'Yosra'];
  }
  addNewUser(id, username, idFamily) {
    return this.fs.doc('users/' + id).set(
      {username,
      idFamily: ''}
    );
    }
    addNewFamily(family: Family) {
      return this.fs.collection('family').add(family);
    }
    getUser() {
      return this.fs.doc('users/' + this.userId).valueChanges();
    }
    updateUserFamily(idFamily: string) {
      this.fs.doc('users/' + this.userId).update(
        {idFamily: idFamily }
      );
    }
    getMembersSameFamily(idF) {
     return this.fs.collection('users', ref => ref.where('idFamily', '==', idF)).snapshotChanges();
    }
    getMembers() {
    return this.fs.collection('users').snapshotChanges();
  }
    getCurrentUser() {
    return this.fs.collection('users').doc(this.userId).valueChanges();
  }
    getUserById(id) {
    return this.fs.doc('users/' + id).valueChanges();
  }
}
