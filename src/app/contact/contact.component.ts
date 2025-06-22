import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { invalidEmailDomain } from './invalidEmailDomain';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor() { }

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  // name = new FormControl('');
  // email = new FormControl('');
  // message = new FormControl('');

  onSubmit() {
    // if (this.name.dirty) {
    //   alert('Name is changed!');
    // }
    // console.log('Name:', this.name.value);
    // console.log('Email:', this.email.value);
    // console.log('Message:', this.message.value);
    console.log(this.contactForm.value);
    console.log(this.contactForm.valid);
  }
  // resetForm() {
  //   this.name.reset();
  //   this.email.reset();
  //   this.message.reset();
  // }
}
