import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusCheckService {

  constructor() { }

  private isLoggedIn = false

  
  // logged out method
  logout(){
    localStorage.clear()
    this.isLoggedIn = false
  }

  // the logged in method
  login(){
    this.isLoggedIn = true
  }

  // show if logged in or not
  showStatus(){
    const token = localStorage.getItem('token') as string

    if(token){
      this.isLoggedIn = true
      return true
    } 
    
    this.isLoggedIn = false
    return this.isLoggedIn
  }

  // get the user roles
  getRole(){
    // return roles based on tokens
  }
}
