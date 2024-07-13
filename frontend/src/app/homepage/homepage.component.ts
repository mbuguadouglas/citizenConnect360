import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var Swiper: any;

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
  Swiper:any

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

    // get the swiper text working
    const swiper = new Swiper('.slide-content', {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centeredSlides: true,
      effect: 'fade',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  
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

