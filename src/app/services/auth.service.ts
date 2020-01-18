import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.user;
   }
   // Registration with Email and Password
  register(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  // Login xith Email and Password
  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email , password);
  }
  // Logout
  logout() {
    console.log('logged out');
    return this.afAuth.auth.signOut();
  }
  // is User logged?
  isAuth() {
    return this.afAuth.authState.pipe(auth => auth);
  }
  sendMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification();
  }
}
