import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-email',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-email.component.html',
  styleUrl: './register-email.component.css'
})
export class RegisterEmailComponent implements OnInit{

  constructor ( private auth:AuthService ){}


  // create a form
  form!:FormGroup
  message = '' //message from the backend
  router = Inject(Router)   //allow navigation to the login page
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,10}$/

  // method to run when the form is submitted
  onSubmit(){
    console.log(this.form.value)
    this.auth.registerUser(this.form.value).subscribe(
      (response)=>{
        this.message = response.message

        // delay redirection, allow user to read message
        setTimeout(()=>{
          this.router.navigate(['/login'])
        }, 1500)
      },
      (error)=>{
        console.log(error)
        this.message = error.message //severe nesting
      })

    // clear form on submit
    this.form.reset
  }

  // pass values to the service then the db
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, this.passwordRegexValidator.bind(this)]),
      acceptTos: new FormControl(null, Validators.required)
    })
  }

  // custom synchronous validator. doesnt work!!!
  passwordRegexValidator(control:FormControl):{[x:string]:boolean} | null{
    if (this.passwordRegex.test(control.value)){
      return {passwordRegex:true}
    }
    return null
  }

}
