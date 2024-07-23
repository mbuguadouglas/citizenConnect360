import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StatusCheckService } from '../services/authStatusCheck/status-check.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor( 
    // make constructor public to allow its use in the frontend
    public status:StatusCheckService
  ) {}

  // for getting the role from local storage
  role:string = ''
  id:string = ''

  ngOnInit(): void {
    
    // get role from local storage
    this.role = localStorage.getItem('role') as string
    this.id = localStorage.getItem('id') as string
  }

}
