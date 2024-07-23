import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent implements OnInit, OnChanges,AfterViewInit{


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  form!: FormGroup
  role:string = ''
  id:string = ''


  // function for update popup
  addPoll(): void {
    const popup = document.getElementById("popup-1")! as HTMLDivElement
    if (popup) {
      popup.classList.toggle("active");
    }
  }

  submitPoll():void{
    const popup = document.getElementById("popup-2")! as HTMLDivElement
    if (popup) {
      popup.classList.toggle("active");
    }

  }

  
    ngOnInit(): void {
      // get values from local storage
      this.role = localStorage.getItem('role') as string
      this.id = localStorage.getItem('id') as string
      
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      // create and remove the update popup
      this.addPoll()
      
    }

    ngAfterViewInit(): void {
      const options = this.el.nativeElement.querySelectorAll('.choice');
      options.forEach((option: HTMLElement, i: number) => {
        this.renderer.listen(option, 'click', () => {
          options.forEach((opt: HTMLElement, j: number) => {
            if (opt.classList.contains('selected')) {
              this.renderer.removeClass(opt, 'selected');
            }
          });
  
          this.renderer.addClass(option, 'selected');
          options.forEach((opt: HTMLElement, k: number) => {
            this.renderer.addClass(opt, 'selectall');
          });
  
          const forVal = option.getAttribute('for');
          const selectInput: HTMLInputElement = this.el.nativeElement.querySelector(`#${forVal}`);
          const getAtt = selectInput.getAttribute('type');
          if (getAtt === 'checkbox') {
            selectInput.setAttribute('type', 'radio');
          } else if (selectInput.checked) {
            this.renderer.removeClass(option, 'selected');
            selectInput.setAttribute('type', 'checkbox');
          }
  
          const selectedIndices: number[] = [];
          options.forEach((opt: HTMLElement, l: number) => {
            if (opt.classList.contains('selected')) {
              selectedIndices.push(l);
            }
          });
  
          if (selectedIndices.length === 0) {
            options.forEach((opt: HTMLElement) => {
              opt.removeAttribute('class');
            });
          }
        });
      });
    }

}
