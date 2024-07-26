import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { View, viewRequest, viewsResponse } from '../../models/views';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  constructor( 
    // add http client to allow comms with the backend
    private http:HttpClient
  ) { }

  // url for auth routes. should be the path in your backend not your frontend
  private readonly baseUrl:string = 'http://localhost:4000/views'
  
  // getViews
  getViews():Observable<Array<View>>{
    return this.http.get<Array<View>>(this.baseUrl ) 
  }
  
  // getViewById
  getView(id:string):Observable<Array<View>>{
    return this.http.get<Array<View>>(this.baseUrl + id) 
  }
  
  // addView
  addView(newView:viewRequest):Observable<viewsResponse>{
    const token = localStorage.getItem('token') as string
    return this.http.post<viewsResponse>(this.baseUrl+ '/add-view',newView)
  }
  
  // ADMIN ROLES
  // updateView
  // sensorView
  // deleteView
  deleteView(id:string):Observable<Array<View>>{
    const token = localStorage.getItem('token') as string
    return this.http.delete<Array<View>>(this.baseUrl + id) 
  }

}
