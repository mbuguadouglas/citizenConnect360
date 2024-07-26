import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Poll, pollRequest } from '../models/polls';
import { PollsService } from '../services/polls/polls.service';

@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent implements OnInit, OnChanges,AfterViewInit{


  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ps:PollsService
  ) {}

  pollForm!: FormGroup
  polls:Array<Poll> = []
  role:string = ''
  id:string = ''
  message:string = ''


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

  createPoll(){
    const { title, choices} = this.pollForm.value
    console.log(this.pollForm.value)
    const newPoll:pollRequest = { userId:this.id, title, choices}
    this.ps.addPoll(newPoll).subscribe(
      response=>{
        this.message = response.message
        console.log(response.message)
      },
      error =>{
        console.log(error.message)
        this.message = error
      }
    )
  }

  
    ngOnInit(): void {
      // get values from local storage
      this.role = localStorage.getItem('role') as string
      this.id = localStorage.getItem('id') as string

      //handle the form
      this.pollForm = new FormGroup({
      title:new FormControl(null,Validators.required),
      choices:new FormArray([]),
      })

      this.ps.getPolls().subscribe( 
        response=>{
        this.polls = response
        console.log(this.polls)
      })
         
      
    }

    addChoices(){
      // add controll into form choices
      const controll = new FormControl(null, Validators.required);  //WITHOUT SEMICOLON HERE CODE BREAKS
      (<FormArray>this.pollForm.get('choices')).push(controll)
    }

    getChoices(){
      return (<FormArray>this.pollForm.get('choices')).controls
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
