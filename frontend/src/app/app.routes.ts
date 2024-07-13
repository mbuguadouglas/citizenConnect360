import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { RegisterEmailComponent } from './register-email/register-email.component';
import { RegisterChoiceComponent } from './register-choice/register-choice.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Error404Component } from './error-404/error-404.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitizenViewsComponent } from './citizen-views/citizen-views.component';
import { CitizenIncidentsComponent } from './citizen-incidents/citizen-incidents.component';
import { CitizenPollsComponent } from './citizen-polls/citizen-polls.component';
import { CitizenEducateComponent } from './citizen-educate/citizen-educate.component';

export const routes: Routes = [
    {path:'', component:HomepageComponent},
    {path:'auth',children:[
        {path:'', component:RegisterChoiceComponent},
        {path:'login',component:LoginEmailComponent},
        {path:'register', component:RegisterEmailComponent},
        {path:'forgot-password', component:ForgotPasswordComponent}
    ]},
    {path:':id', component:DashboardComponent},
    {path:'citizen/:id', children:[
        {path:'views', component:CitizenViewsComponent},
        {path:'incidents', component:CitizenIncidentsComponent},
        {path:'polls', component:CitizenPollsComponent},
        {path:'educate', component:CitizenEducateComponent}
    ]},




    // add the error 4040 route
    {path:'**', component:Error404Component}
];
