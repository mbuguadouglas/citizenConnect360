import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/authService/auth.service';
import { Router } from '@angular/router';
import { StatusCheckService } from '../services/authStatusCheck/status-check.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-email.component.html',
  styleUrl: './login-email.component.css'
})
export class LoginEmailComponent implements OnInit, OnDestroy{

  constructor ( 
    private auth:AuthService,
    private status:StatusCheckService
  ){}

  // create the form
  form!:FormGroup
  // to be received from token
  message:string = '' 
  role:string = ''  
  id:string = ''   
  router = Inject(Router) //navigate to either admin or dashboard
  sub!:Subscription     //prevent memory leak on component switching
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,10}$/


  onSubmit(){
    this.auth.loginUser(this.form.value).subscribe(
      (response) =>{
        this.message = response.message   //message to be displayed in the DOM

        // // CHECK IF TOKENS ARE WORKING PROPERLY
        // console.log(response.token)
        // console.log(response.decodedToken.role)
        // console.log(response.decodedToken.id)
        // console.log(response.decodedToken.email)

        localStorage.setItem('token',response.token)
        localStorage.setItem('id',response.decodedToken.id)
        localStorage.setItem('role',response.decodedToken.role)
        
        // if token exists, save it to the localStorage
        if(response.token){
          // save token received to system local storage
          this.id = localStorage.getItem('id') as string 
          this.role = localStorage.getItem('role') as string

          // if the token role is admin
          if(this.role === 'admin'){
            // navigate to the admin panel
            this.router.navigate['/admin']
          } else { // if the token role is citizen/govmt-official

            setTimeout(()=>{    //delayed to read message on DOM
              // this.status.login()
              this.status.showStatus()
              this.router.navigate([`dashboard/:{this.id}`])
            }, 1000)
          }
          
        }

      },
      (error)=>{
        console.log(error)
        this.message = error.message
      })

      this.form.reset   //clear form once submitted
  }


  // custom synchronous validator. doesnt work!!!
  passwordRegexValidator(control:FormControl):{[x:string]:boolean} | null{
    // vennnye ilikuwa array, it was test. but sasa regex itakuwa test
    if (this.passwordRegex.test(control.value)){
      return {passwordRegex:true}
    }
    return null
  }
  


  // values to be passed value to the service, then db
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    })
  }


  ngOnDestroy(): void {
    console.log('Login component destroyed')
    this.sub.unsubscribe()
  }

}
