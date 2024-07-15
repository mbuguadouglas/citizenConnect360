import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-educate-chat',
  standalone: true,
  imports: [],
  templateUrl: './educate-chat.component.html',
  styleUrl: './educate-chat.component.css'
})
export class EducateChatComponent implements AfterViewInit{

  constructor() {}

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('msgerForm') msgerForm!: ElementRef<HTMLFormElement>;
  @ViewChild('msgerInput') msgerInput!: ElementRef<HTMLInputElement>;
  @ViewChild('msgerChat') msgerChat!: ElementRef<HTMLDivElement>;

  showSidebar() {
    if(this.sidebar){
      this.sidebar.nativeElement.classList.toggle('active')

    }
  }


  BOT_MSGS: string[] = [
    "Hi, how are you?",
    "Ohh... I can't understand what you trying to say. Sorry!",
    "I like to play games... But I don't know how to play!",
    "Sorry if my answers are not relevant. :))",
    "I feel sleepy! :("
  ];

  BOT_IMG: string = "https://image.flaticon.com/icons/svg/327/327779.svg";
  PERSON_IMG: string = "https://image.flaticon.com/icons/svg/145/145867.svg";
  BOT_NAME: string = "openAI";
  PERSON_NAME: string = "Mbugua";

  ngOnInit(): void {}

  ngAfterViewInit() {
    // console.log(this.sidebar)

    this.msgerForm.nativeElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this.handleSubmit();
      // this.appendMessage(this.PERSON_NAME, this.PERSON_IMG, 'right', this.msgerInput.nativeElement.value);
    });
  }

  handleSubmit(): void {
    const msgText = this.msgerInput.nativeElement.value;
    if (!msgText) return;

    this.appendMessage(this.PERSON_NAME, this.PERSON_IMG, 'right', msgText);
    this.msgerInput.nativeElement.value = '';

    this.botResponse();
  }

  appendMessage(name: string, img: string, side: string, text: string): void {
    const msgHTML = `
      <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">${name}</div>
            <div class="msg-info-time">${this.formatDate(new Date())}</div>
          </div>
          <div class="msg-text">${text}</div>
        </div>
      </div>
    `;
    this.msgerChat.nativeElement.insertAdjacentHTML('beforeend', msgHTML);
    this.msgerChat.nativeElement.scrollTop += 500;
  }
  

  botResponse(): void {
    const r = this.random(0, this.BOT_MSGS.length - 1);
    const msgText = this.BOT_MSGS[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
      this.appendMessage(this.BOT_NAME, this.BOT_IMG, 'left', msgText);
    }, delay);
  }

  formatDate(date: Date): string {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
  }

  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }



}
