import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterEmailComponent } from "./register-email/register-email.component";
import { LoginEmailComponent } from "./login-email/login-email.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RegisterChoiceComponent } from "./register-choice/register-choice.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RegisterEmailComponent, LoginEmailComponent, ForgotPasswordComponent, HomepageComponent, NavbarComponent, RegisterChoiceComponent]
})
export class AppComponent {
  title = 'frontend';
}
