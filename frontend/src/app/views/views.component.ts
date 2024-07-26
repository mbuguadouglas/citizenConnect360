import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewsService } from '../services/views/views.service';
import { View, viewRequest } from '../models/views';


@Component({
  selector: 'app-views',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent implements OnInit,OnChanges{

  constructor(
    private vs:ViewsService
  ) {}

  // form!: FormGroup
  id:string = ''
  role:string = '' //get role from localstorage
  message: string = ''
  viewForm!: FormGroup
  views:Array<View> = []


  // function for update popup
  addView(): void {
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

  submitView(){
    const { title, description, body, location, imageUrl} = this.viewForm.value
    const newView:viewRequest = { userId:this.id, title, description, body, location, imageUrl}
    this.vs.addView(newView).subscribe(
      response=>{
        this.message = response.message
        console.log(response.message)
      },
      error =>{
        console.log(error.message)
        this.message = error
      }
    )
  }


  
    // console.log(this.views)
    ngOnInit(): void {
      // get values from the local storage
      this.id = localStorage.getItem('id') as string
      this.role = localStorage.getItem('role') as string  //display the admin page selectively
  
      // get all hotels
      this.vs.getViews().subscribe(
        response => this.views = response
        // error => this.message = error
      )
    
      // ADMIN ROLES
      // getHotel(id)
      // updateHotel(id)
      // deleteHotel(id)
    
      //handle the form
      this.viewForm = new FormGroup({
        // userId: this.id,
        title:new FormControl(null,Validators.required),
        description:new FormControl(null,Validators.required),
        body:new FormControl(null,Validators.required),
        location:new FormControl(null,Validators.required),
        imageUrl:new FormControl(null,Validators.required)
      })

      this.vs.getViews().subscribe( 
        response=>{
        this.views = response
        console.log(this.views)
      })
         
    
  
      
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      // create and remove the update popup
      this.addView()
      this.getSummary()
      
    }

}



