import { RegisterComponent } from './familiga/register/register.component';
import { FamiligaComponent } from './familiga/familiga/familiga.component';
import { SidbarComponent } from './familiga/sidbar/sidbar.component';
import { LoginComponent } from './familiga/login/login.component';
import { ChatComponent } from './familiga/chat/chat.component';
import { ArrierePlanComponent } from './familiga/arriere-plan/arriere-plan.component';
import { InvitationComponent } from './familiga/invitation/invitation.component';
import { ArchivesComponent } from './familiga/archives/archives.component';
import { ProfileComponent } from './familiga/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './familiga/acceuil/acceuil.component';




const APP_ROUTING: Routes =  [
        {path: 'dashboroad' , component: FamiligaComponent, children: [
        {path: 'acceuil' , component: AcceuilComponent},
        {path: 'profile' , component: ProfileComponent},
        {path: 'archives' , component: ArchivesComponent},
        {path: 'invitation' , component: InvitationComponent},
        {path: 'arrierePlan' , component: ArrierePlanComponent},
        {path: 'chat' , component: ChatComponent},
    ]},
         {path: 'login' , component: LoginComponent},
         {path: 'register' , component: RegisterComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
