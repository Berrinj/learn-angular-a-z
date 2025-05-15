import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor() { }

  name = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');

  onSubmit() {
    if (this.name.dirty) {
      alert('Name is changed!');
    }
    console.log('Name:', this.name.value);
    console.log('Email:', this.email.value);
    console.log('Message:', this.message.value);
  }
  // resetForm() {
  //   this.name.reset();
  //   this.email.reset();
  //   this.message.reset();
  // }
}
