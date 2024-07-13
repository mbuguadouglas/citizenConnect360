import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-educate',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './educate.component.html',
  styleUrl: './educate.component.css'
})
export class EducateComponent {

}
