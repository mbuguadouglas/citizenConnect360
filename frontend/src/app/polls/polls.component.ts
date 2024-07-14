import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent implements OnInit, OnChanges{


  constructor() {}

  form!: FormGroup


  // function for update popup
  addIncident(): void {
    const popup = document.getElementById("popup-1")! as HTMLDivElement
    if (popup) {
      popup.classList.toggle("active");
    }
  }

  submitPoll():void{
    const popup = document.getElementById("popup-2")! as HTMLDivElement
    if (popup) {
      popup.classList.toggle("active");
    }

  }

  
    ngOnInit(): void {
      
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      // create and remove the update popup
      this.addIncident()
      
    }

}
