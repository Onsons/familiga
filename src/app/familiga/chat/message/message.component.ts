
import { ChatMessage } from './../../../modeles/chat-message';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isuser= false;
  constructor(private as:AuthService) {
    this.getCurrentUser();
   }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
}
getCurrentUser() {
  this.as.isAuth().subscribe(auth => {
    if (auth) {

      if (auth.email === this.userEmail) { this.isuser = true; }
    } else {
       console.log('Not user logged');
       this.isuser = false;
    }
  });
}
}
