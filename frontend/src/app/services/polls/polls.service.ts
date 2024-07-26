import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll, pollRequest, pollsResponse } from '../../models/polls';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor( 
    // add http client to allow comms with the backend
    private http:HttpClient
  ) { }

  // url for auth routes. should be the path in your backend not your frontend
  private readonly baseUrl:string = 'http://localhost:4000/polls/'



  // getPolls
  getPolls():Observable<Array<Poll>>{
    return this.http.get<Array<Poll>>(this.baseUrl ) 
  }
  
  // getPollById
  getPoll(id:string):Observable<Array<Poll>>{
    return this.http.get<Array<Poll>>(this.baseUrl + id) 
  }
  
  // addPoll
  addPoll(newPoll:pollRequest):Observable<pollsResponse>{
    const token = localStorage.getItem('token') as string
    return this.http.post<pollsResponse>(this.baseUrl+ '/add-poll',newPoll)
  }
  
  // ADMIN ROLES
  // closePoll

  // deletePoll
  deletePoll(id:string):Observable<Array<Poll>>{
    const token = localStorage.getItem('token') as string
    return this.http.delete<Array<Poll>>(this.baseUrl + id) 
  }
  
}
