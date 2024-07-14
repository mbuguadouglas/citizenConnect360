import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-educate-chat',
  standalone: true,
  imports: [],
  templateUrl: './educate-chat.component.html',
  styleUrl: './educate-chat.component.css'
})
export class EducateChatComponent implements OnInit{

  constructor() {}

  // sidebar UI
  // btn = document.querySelector('.toggle')! as HTMLElement
  sidebar:any = document.querySelector('.sidebar')! as HTMLElement

  displaySidebar(){
    if (this.sidebar){
      this.sidebar.classList.toggle('active')
      // console.log('radaaa')
    }
  }

  ngOnInit(): void {
    
    // display the sidebar code
    this.displaySidebar()
  }


}
