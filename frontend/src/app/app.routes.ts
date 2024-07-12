import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { RegisterEmailComponent } from './register-email/register-email.component';
import { RegisterChoiceComponent } from './register-choice/register-choice.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Error404Component } from './error-404/error-404.component';

export const routes: Routes = [
    {path:'auth',children:[
        {path:'', component:RegisterChoiceComponent},
        {path:'login',component:LoginEmailComponent},
        {path:'register', component:RegisterEmailComponent},
        {path:'forgot-password', component:ForgotPasswordComponent}
    ]},
    {path:'', component:HomepageComponent},




    // add the error 4040 route
    {path:'**', component:Error404Component}
];
