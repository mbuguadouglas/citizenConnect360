import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './incidents.component.html',
  styleUrl: './incidents.component.css'
})
export class IncidentsComponent implements OnChanges{

  constructor() {}

  form!: FormGroup


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
      
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      // create and remove the update popup
      this.addIncident()
      this.getSummary()
      
    }

}
