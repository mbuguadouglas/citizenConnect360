import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../services/authService/auth.service";
import { AuthActions } from "../actions/auth.actions";
import { concatMap, map } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects{

    constructor(
        private action$:Actions,
        private auth:AuthService
    ) {}

    router = inject(Router)

    registerUser$=createEffect(()=>{
        return this.action$.pipe(
            // filter all actions leave only register action
            ofType(AuthActions.register),

            // receive only input   from action reaching out to the service
            concatMap( request => this.auth.registerUser(request.user).pipe(
                    map( response => {
                            this.router.navigate(["/login"]);
                            return AuthActions.registerSuccess({response:response})
                        }
                    )
                ))
        )
        
    })

}