import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user.interface';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  notif;
  isLogged = false;
  user: User = {
  email: '',
  username: '',
  imageUser: ''
 };
 constructor(private as: AuthService, private router: Router, private todoService: TodoService) {
  }
 ngOnInit() {
  this.getCurrentUser();
  this.todoService.getNotifi().subscribe(d => {
    this.notif = d.map( t => {
      return {
        id: t.payload.doc.id,
        ...t.payload.doc.data() as {any}
      };
    });
});
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
     } else {
        console.log('Not user logged');
        this.isLogged = false;
     }
   });
 }
 logout() {
   this.as.logout();
   this.router.navigate(['login']);
 }
}
