import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthInterface } from "../reducers/auth.reducers";


const authFeatureSelector = createFeatureSelector<AuthInterface>('auth')

export const signupSuccessSelector= createSelector(authFeatureSelector, (state)=>state.registerSuccessMsg)
export const signuoErrorMsg= createSelector(authFeatureSelector, (state)=>state.registerErrorMsg)

export const loginErrorMsg= createSelector(authFeatureSelector, (state)=>state.loginErrorMsg)
export const loginSuccessMsg= createSelector(authFeatureSelector, (state)=>state.loginSuccessMsg)