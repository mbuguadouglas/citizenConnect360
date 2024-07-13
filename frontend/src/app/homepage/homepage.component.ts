import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements AfterViewInit{

  constructor() {}

  // worked on the typewriter effect in the hero page
  typedText: HTMLElement | null = null;

  textLoad(){
    setTimeout(() => {
      if (this.typedText) {
        this.typedText.textContent = 'voice';
      }
    }, 0);

    setTimeout(() => {
      if (this.typedText) {
        this.typedText.textContent = 'power';
      }
    }, 4000);

    setTimeout(() => {
      if (this.typedText) {
        this.typedText.textContent = 'platform';
      }
    }, 8000);
  }
  
  
  // ngOnInit(): void { -> returned null for typed text. thus opted not to use it
  //   // call the type writer word change function to esnure it runs
    
  //   // this.textLoad()
  //   // console.log(this.typedText.textContent)
  // }
  
  ngAfterViewInit(): void {
    this.typedText = document.querySelector('.second-text')
    this.textLoad()
  }

  
  }
  
  //   constructor() {}
  
  //   typedText: HTMLElement | null = null;
  //   texts: string[] = ['voice', 'power', 'platform'];
  //   currentIndex: number = 0;
  
  
  //   textLoad() {
  //     setInterval(() => {
  //       setTimeout(() => {
  //           if (this.typedText) {
  //             this.typedText.textContent = 'voice';
  //           }
  //         }, 0);
  
  //         setTimeout(() => {
  //           if (this.typedText) {
  //             this.typedText.textContent = 'power';
  //           }
  //         }, 4000);
  
  //         setTimeout(() => {
  //           if (this.typedText) {
  //             this.typedText.textContent = 'platform';
  //           }
  //         }, 8000);
  //     }, 3500); // Change text every 4 seconds
  //   }
  
  //   ngOnInit(): void {
  //     // Any initialization logic can go here
  //   }
  
  //   ngAfterViewInit(): void {
  //     this.typedText = document.querySelector('.second-text');
  //     this.textLoad();
  //   }

