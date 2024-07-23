import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginResponse, loginUser, registerResponse, User } from '../../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    // add http client to allow comms with the backend
    private http:HttpClient
  ) { }

  // url for auth routes. should be the path in your backend not your frontend
  private readonly baseUrl:string = 'http://localhost:4000/auth/'
  
  // registering new users
  registerUser(newUser:User):Observable<registerResponse>{
    console.log(newUser)    
    return this.http.post<registerResponse>(this.baseUrl+'register', newUser)
  }

  // logging in existing users
  loginUser(user:loginUser):Observable<loginResponse>{
    return this.http.post <loginResponse>(this.baseUrl+'login',user)
  }

  // get all users from db
  getUsers():Observable<Array<User>>{
    return this.http.get <Array<User>>(this.baseUrl + 'users')
  }

  // forgot password
  // change password
  // get user by specific id
  // get user by email
  // delete user



  
}
