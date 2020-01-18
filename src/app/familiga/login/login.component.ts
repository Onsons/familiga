import { User } from './../../user.interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  err;
  constructor(private as: AuthService , private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  login(f) {
    const data: User = f.value;
    this.as.login(data.email , data.password)
    .then(result => this.router.navigate(['dashboroad/acceuil']))
    .catch(err => this.err = err);
  }
}
