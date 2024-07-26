import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident, incidentRequest, incidentsResponse } from '../../models/incidents';

@Injectable({
  providedIn: 'root'
})
export class InicidentsService {

  constructor( 
    // add http client to allow comms with the backend
    private http:HttpClient
  ) { }

  // url for incidents. should be the path in your backend not your frontend
  private readonly baseUrl:string = 'http://localhost:4000/incidents'

  
  // get Incidents
  getIncidents():Observable<Array<Incident>>{
    return this.http.get<Array<Incident>>(this.baseUrl ) 
  }
  
  // getIncidentById
  getIncident(id:string):Observable<Array<Incident>>{
    return this.http.get<Array<Incident>>(this.baseUrl + id) 
  }
  
  // addIncident
   addIncident(newIncident:incidentRequest):Observable<incidentsResponse>{
     const token = localStorage.getItem('token') as string
     return this.http.post<incidentsResponse>(this.baseUrl+ '/add-incident',newIncident)
   }
   
   // ADMIN ROLES
   // sensorIncident
  //  sensorIncident(id:string):Observable<incidentsResponse>{
  //   return this.http.patch<incidentsResponse>(this.baseUrl + id) 
  // }

   // deleteIncident
   deleteIncident(id:string):Observable<Array<Incident>>{
    const token = localStorage.getItem('token') as string
    return this.http.delete<Array<Incident>>(this.baseUrl + id) 
  }

}
