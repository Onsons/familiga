import { ErrorComponent } from './familiga/error/error.component';
import { RegisterComponent } from './familiga/register/register.component';
import { FamiligaComponent } from './familiga/familiga/familiga.component';
import { LoginComponent } from './familiga/login/login.component';
import { ChatComponent } from './familiga/chat/chat.component';
import { ArrierePlanComponent } from './familiga/arriere-plan/arriere-plan.component';
import { InvitationComponent } from './familiga/invitation/invitation.component';
import { ArchivesComponent } from './familiga/archives/archives.component';
import { ProfileComponent } from './familiga/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './familiga/acceuil/acceuil.component';
import { AuthGuard } from './services/guards/auth.guard';
import { LandingComponent } from './familiga/landing/landing.component';



const APP_ROUTING: Routes =  [
        {path: '' , component: LandingComponent, pathMatch: 'full'},
        {path: 'dashboroad' , component: FamiligaComponent, canActivate: [AuthGuard] , children: [
        {path: 'acceuil' , component: AcceuilComponent},
        {path: 'profile' , component: ProfileComponent},
        {path: 'archives' , component: ArchivesComponent},
        {path: 'invitation' , component: InvitationComponent},
        {path: 'arrierePlan' , component: ArrierePlanComponent},
        {path: 'chat' , component: ChatComponent},
    ]},
         {path: 'login' , component: LoginComponent},
         {path: 'register' , component: RegisterComponent},
         {path: '' , redirectTo: 'login', pathMatch: 'full'},
         {path: '**' , component: ErrorComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
