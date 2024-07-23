import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

  constructor() {}

  @ViewChild('sidebar')
  sidebar!: ElementRef;
  id:string = ''
  role:string = ''

  // ngAfterViewInit(): void {
  //   // console.log(this.sidebar)
  // }

  ngOnInit(): void {
    this.id = localStorage.getItem('id') as string
    this.role = localStorage.getItem('role') as string
  }

  showSidebar() {
    if(this.sidebar){
      this.sidebar.nativeElement.classList.toggle('active')

    }
  }

}
