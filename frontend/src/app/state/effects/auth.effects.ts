import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../services/authService/auth.service";
import { AuthActions } from "../actions/auth.actions";
import { catchError, concatMap, exhaustMap, map, of } from "rxjs";
import { Router } from "@angular/router";
import { StatusCheckService } from "../../services/authStatusCheck/status-check.service";


@Injectable()
export class AuthEffects{

    constructor(
        private action$:Actions,
        private auth:AuthService,
        private router: Router,
        private status:StatusCheckService
    ) {}

    message:string = ''
    id:string = ''
    role:string = ''


    registerUser$=createEffect(()=>{
        return this.action$.pipe(
            // filter all actions leave only register action
            ofType(AuthActions.register),

            // receive only input   from action reaching out to the service
            concatMap( request => this.auth.registerUser(request.user).pipe(
                    map( response => {
                            // delay redirection, allow user to read message
                            setTimeout(()=>{
                            this.router.navigate(['./auth/login'])
                            }, 1500)
                            return AuthActions.registerSuccess({response:response})
                        }
                    )
                ))
        )
        
    })


    loginUser$ = createEffect(() => {
        return this.action$.pipe(
          ofType(AuthActions.login),
          exhaustMap(({ user }) => this.auth.loginUser(user).pipe(
            map(response => {
              localStorage.setItem('token',response.token)
              localStorage.setItem('id',response.decodedToken.id)
              localStorage.setItem('role',response.decodedToken.role)
    
               // Store the userId separately for easy access
            if (response.token) {
                
                this.message = response.message
                // save token received to system local storage
                this.id = localStorage.getItem('id') as string 
                this.role = localStorage.getItem('role') as string
                
                // if the token role is admin
                if(this.role === 'admin'){
                    // navigate to the admin panel
                    
                    this.router.navigate(['/admin'])
                } else { // if the token role is citizen/govmt-official
                    
                    setTimeout(()=>{    //delayed to read message on DOM
                        // this.status.login()
                        this.status.showStatus()
                        this.router.navigate([`dashboard/`,this.id])  //navigate to dashboard with user id
                    }, 1000)
                }
            }
    
              return AuthActions.loginSuccess({ response: response });
            }),
            catchError(error => of(AuthActions.loginFailure({ message: error.error.message })))
        ))
    );
});



}