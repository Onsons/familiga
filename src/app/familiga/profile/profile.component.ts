import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLogged = false;
  user: User = {
    email: '',
    username: '',
    imageUser: ''
   };
  constructor(private as: AuthService) {
      this.getCurrentUser();
  }

  ngOnInit() {
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
}
