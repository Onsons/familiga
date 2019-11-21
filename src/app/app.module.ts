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
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';

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
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ROUTING,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
