import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { AngularFireFunctions } from '@angular/fire/functions';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  endpoint = 'https://us-central1-familiga-bdab2.cloudfunctions.net/httpEmail';
  idFamily;
  link = 'www.localhost:4200/register/';
  constructor(private http: HttpClient, private fun: AngularFireFunctions, private userService: UserService) {
   }
  ngOnInit() {
    this.userService.getCurrentUser().subscribe(data => this.idFamily = data['idFamily']);
  }
  /*sendEmail() {
    /* const url = 'https://console.firebase.google.com/u/0/project/familiga-bdab2/functions/list/httpEmail';
    const params: URLSearchParams = new URLSearchParams();
    const headers = new HttpHeaders({'content-type': 'application/json', 'access-Control-Allow-Origin': '*'});

    params.set('to', 'tliba.ons@gmail.com');
    params.set('from', 'you@yoursupercoolapp.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');
        return this.http.post(url, params, {headers})
        .toPromise()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
  }*/
  sendEmail(form) {
    console.log(form);
    console.log('www.localhost:4200/register/', this.idFamily);
    this.http.post(this.endpoint, form).subscribe();
}
}
