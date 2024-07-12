import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

  constructor() {}

  // worked on the typewriter effect in the hero page
  typedText = document.querySelector('.second-text') as HTMLElement

  textLoad(){
    setTimeout(()=>{
      this.typedText.textContent = 'voice'
    },0)

    setTimeout(()=>{
      this.typedText.textContent = 'power'
    },4000)

    setTimeout(()=>{
      this.typedText.textContent = 'platform'
    },8000)
  }
  
  
  ngOnInit(): void {
    // call the type writer word change function to esnure it runs
    // this.textLoad()
    
    // console.log(this.typedText.textContent)
  }

}
