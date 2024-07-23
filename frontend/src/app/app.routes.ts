import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { RegisterEmailComponent } from './register-email/register-email.component';
import { RegisterChoiceComponent } from './register-choice/register-choice.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Error404Component } from './error-404/error-404.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewsComponent } from './views/views.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { PollsComponent } from './polls/polls.component';
import { EducateComponent } from './educate/educate.component';
import { EducateChatComponent } from './educate-chat/educate-chat.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {path:'', component:HomepageComponent},
    {path:'auth',children:[
        {path:'', component:RegisterChoiceComponent},
        {path:'login',component:LoginEmailComponent},
        {path:'register', component:RegisterEmailComponent},
        {path:'forgot-password', component:ForgotPasswordComponent}
    ]},
    {path:'dashboard/:id', component:DashboardComponent},
    {path:'views/:id', component:ViewsComponent},
    {path:'incidents/:id', component:IncidentsComponent},
    {path:'polls/:id', component:PollsComponent},
    {path:'educate', children: [
        {path:'', component:EducateComponent},
        {path:':id', component:EducateChatComponent}
    ]},
    {path:'admin', component:AdminComponent},

    // add the error 4040 route
    {path:'**', component:Error404Component}
];
