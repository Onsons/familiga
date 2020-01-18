import { UserService } from './../../../services/user.service';



import { ChatService } from './../../../services/chat.service';
import { Component, OnInit, OnChanges } from '@angular/core';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed;
  idFamily;
  constructor(private chat: ChatService, private userservice: UserService) { }
  ngOnInit() {
    console.log('feed initilazing ... ');
     this.chat.getMessages().valueChanges().subscribe(data => this.feed = data);

  }
  ngOnChanges() {
    this.feed = this.chat.getMessages();
  }

}
