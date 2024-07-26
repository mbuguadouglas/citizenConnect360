import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions } from "@ngrx/effects";
import { View } from "../../models/views";



@Injectable()
export class ViewEffects{

    constructor(
        private action$:Actions,
        private router:Router,

    ) {}

    views:Array<View> = []

    
}