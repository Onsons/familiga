import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ROUTING } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidbarComponent } from './familiga/sidbar/sidbar.component';
import { AcceuilComponent } from './familiga/acceuil/acceuil.component';
import { ProfileComponent } from './familiga/profile/profile.component';
import { ArchivesComponent } from './familiga/archives/archives.component';
import { InvitationComponent } from './familiga/invitation/invitation.component';
import { ArrierePlanComponent } from './familiga/arriere-plan/arriere-plan.component';
import { ChatComponent } from './familiga/chat/chat.component';
import { LoginComponent } from './familiga/login/login.component';
import { FamiligaComponent } from './familiga/familiga/familiga.component';
import { RegisterComponent } from './familiga/register/register.component';
import { TodoComponent } from './familiga/todo/todo.component';
import { TodolistComponent } from './familiga/todolist/todolist.component';
import { TodoItemComponent } from './familiga/todo-item/todo-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {  AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { ErrorComponent } from './familiga/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { HttpModule } from '@angular/http';
import { FeedComponent } from './familiga/chat/feed/feed.component';
import { ChatFormComponent } from './familiga/chat/chat-form/chat-form.component';
import { MessageComponent } from './familiga/chat/message/message.component';
import { DefaultImagePipe } from './default-image.pipe';
import { LandingComponent } from './familiga/landing/landing.component';
import { NavbarComponent } from './familiga/navbar/navbar.component';
import { TodoMembersComponent } from './familiga/todo-members/todo-members.component';
import { HttpClientModule } from '@angular/common/http';
import { ArrierePlanDirective } from './dirctives/arriere-plan.directive';
import { ToastrModule} from 'ngx-toastr';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
@NgModule({
  declarations: [
    AppComponent,
    SidbarComponent,
    AcceuilComponent,
    ProfileComponent,
    ArchivesComponent,
    InvitationComponent,
    ArrierePlanComponent,
    ChatComponent,
    LoginComponent,
    FamiligaComponent,
    RegisterComponent,
    TodoComponent,
    TodolistComponent,
    TodoItemComponent,
    ErrorComponent,
    FeedComponent,
    ChatFormComponent,
    MessageComponent,
    DefaultImagePipe,
    LandingComponent,
    NavbarComponent,
    TodoMembersComponent,
    ArrierePlanDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ROUTING,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCiUYCR3PK0ehImiBtuvwa4SBle2yoIaDw',
      authDomain: 'familiga-bdab2.firebaseapp.com',
      databaseURL: 'https://familiga-bdab2.firebaseio.com',
      projectId: 'familiga-bdab2',
      storageBucket: 'familiga-bdab2.appspot.com',
      messagingSenderId: '487754328305',
      appId: '1:487754328305:web:d31148f82ca4f70a23a150',
      measurementId: 'G-TJ9NHSMFVV'
    }
    ),
    BrowserAnimationsModule,
    AngularFireStorageModule,
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
