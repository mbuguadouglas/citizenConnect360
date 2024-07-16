import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements AfterViewInit{

  constructor() {}

  @ViewChild('sidebar')
  sidebar!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.sidebar)
  }

  showSidebar() {
    if(this.sidebar){
      this.sidebar.nativeElement.classList.toggle('active')

    }
  }

}
