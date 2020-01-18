import { User } from './../../user.interface';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  /* isLogged = false;
   user: User = {
   email: '',
   username: '',
   imageUser: ''
  };*/
  constructor(private as: AuthService, private router: Router) {
   }
  ngOnInit() {
   // this.getCurrentUser();

  }
 /*  getCurrentUser() {
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
    this.router.navigate(['/landing']);
  } */
}
