import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishModule } from './wish/wish.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, WishModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor() { }

ngOnInit(): void { }
  
}

