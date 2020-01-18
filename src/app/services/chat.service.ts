import { UserService } from './user.service';
import { User } from 'src/app/user.interface';
import { ChatMessage } from './../modeles/chat-message';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: firebase.User;
  idFamily;
  f;
  chatMessages;
  chatMessage: ChatMessage;
  userName: Observable<string>;
  constructor(private db: AngularFireDatabase, private as: AngularFireAuth, private userservice: UserService) {
    this.as.user.subscribe(user => {
      if (user) {
      this.user = user;
    }
    });
  }
  sendMessage(msg: string) {
    this.getIdFamily();
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    const idFamily = this.idFamily;
    console.log('kkk', idFamily);
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: this.user.displayName,
      email: email,
      idFamily
    });
    console.log('message sent!');
  }
  getMessages() {
    console.log('get Messages ... ');
    // return this.db.list('messages', ref => ref.limitToLast(25).orderByKey());
    return this.db.list('messages', ref => ref.limitToLast(25).orderByChild('idFamily').equalTo('E02ehZfK7JVSXat3kVx1'));
  }
  getTimeStamp() {
    const now = new Date();
    console.log(now);
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + ':' + (now.getUTCMinutes() + 1) + ':' + now.getUTCSeconds();
    return (date + ' ' + time);

  }
  getIdFamily() {
    this.userservice.getUserById(this.user.uid).subscribe(data => this.idFamily = data['idFamily']);
  }

}
