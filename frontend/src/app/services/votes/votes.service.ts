import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userIncidentSelector } from '../../state/selectors/incidents.selectors';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  constructor( 
    // add http client to allow comms with the backend
    private http:HttpClient
  ) { }

  // url for auth routes. should be the path in your backend not your frontend
  private readonly baseUrl:string = 'http://localhost:4000/votes/'

  // addVote
  // getVotes
  // getVotes from a specific userId
  // getVotes of a specific user
  // deleteVote
}
