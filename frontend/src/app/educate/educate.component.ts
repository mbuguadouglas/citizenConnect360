import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-educate',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './educate.component.html',
  styleUrl: './educate.component.css'
})
export class EducateComponent implements OnInit{

  role:string = ''
  id:string = ''

  ngOnInit(): void {
    this.role = localStorage.getItem('role') as string
    this.id = localStorage.getItem('id') as string
  }



}
