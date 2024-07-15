import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit{


  // slider 2
  @ViewChild('nextBtn', { static: true }) nextBtn!: ElementRef;
  @ViewChild('prevBtn', { static: true }) prevBtn!: ElementRef;
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;
  @ViewChild('list', { static: true }) list!: ElementRef;
  @ViewChild('runningTime', { static: true }) runningTime!: ElementRef;

  timeRunning = 3000;
  timeAutoNext = 7000;
  runTimeOut: number | undefined;
  runNextAuto: number | undefined;

  constructor() {}

  ngAfterViewInit() {
    const next = this.nextBtn.nativeElement;
    const prev = this.prevBtn.nativeElement;
    const carousel = this.carousel.nativeElement;
    const list = this.list.nativeElement;
    const runningTime = this.runningTime.nativeElement;

    next.onclick = () => {
      this.showSlider('next');
    };

    prev.onclick = () => {
      this.showSlider('prev');
    };

    this.runNextAuto = window.setTimeout(() => {
      next.click();
    }, this.timeAutoNext);

    this.resetTimeAnimation();
  }

  resetTimeAnimation() {
    const runningTime = this.runningTime.nativeElement;
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; /* trigger reflow */
    runningTime.style.animation = null;
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
  }

  showSlider(type: string) {
    const list = this.list.nativeElement;
    const carousel = this.carousel.nativeElement;
    const sliderItemsDom = list.querySelectorAll('.carousel .list .item') as NodeListOf<HTMLElement>;

    if (type === 'next') {
      list.appendChild(sliderItemsDom[0]);
      carousel.classList.add('next');
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carousel.classList.add('prev');
    }

    clearTimeout(this.runTimeOut);

    this.runTimeOut = window.setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
    }, this.timeRunning);

    clearTimeout(this.runNextAuto);
    this.runNextAuto = window.setTimeout(() => {
      this.nextBtn.nativeElement.click();
    }, this.timeAutoNext);

    this.resetTimeAnimation(); // Reset the running time animation
  }

}
