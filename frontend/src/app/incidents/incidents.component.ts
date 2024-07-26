import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Incident, incidentRequest } from '../models/incidents';
import { InicidentsService } from '../services/incidents/inicidents.service';
import { AuthService } from '../services/authService/auth.service';
import { ViewsService } from '../services/views/views.service';


@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './incidents.component.html',
  styleUrl: './incidents.component.css'
})
export class IncidentsComponent implements OnChanges{

  constructor(
    private is:InicidentsService,
    private auth:AuthService,
  ) {}

  id:string = ''
  role:string = '' //get role from localstorage
  incidentForm!: FormGroup
  incidents:Array<Incident> = []
  message:string = ''


  submitIncident(){
    const { title, description, body, location, imageUrl} = this.incidentForm.value
    const newIncident:incidentRequest = { userId:this.id, title, description, body, location, imageUrl}
    this.is.addIncident(newIncident).subscribe(
      response=>{
        this.message = response.message
        console.log(response.message)
      },
      error =>{
        console.log(error.message)
        this.message = error
      }
    )}

  // function for update popup
  addIncident(): void {
    const popup = document.getElementById("popup-1")! as HTMLDivElement
    if (popup) {
      popup.classList.toggle("active");
    }
  }

  // function for getting the summary popup
  getSummary(): void {
    const popup = document.getElementById("popup-2")! as HTMLDivElement
    if (popup) {
      popup.classList.toggle("active");
    }
  }


  
    ngOnInit(): void {
      // get values from the local storage
      this.role = localStorage.getItem('role') as string
      this.id = localStorage.getItem('id') as string


      //handle the form
      this.incidentForm = new FormGroup({
        // userId: this.id,
        title:new FormControl(null,Validators.required),
        description:new FormControl(null,Validators.required),
        body:new FormControl(null,Validators.required),
        location:new FormControl(null,Validators.required),
        imageUrl:new FormControl(null,Validators.required)
      })

      this.is.getIncidents().subscribe( 
        response=>{
        this.incidents = response
        console.log(this.incidents)
      })
          
      
      
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      // create and remove the update popup
      this.addIncident()
      this.getSummary()
      
    }

}
