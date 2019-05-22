import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Subscriber {
  name: string;
  email: string;
}

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  subscriber: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.subscriber = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  reset() {
    this.subscriber.reset({
      name: '',
      email: ''
    });
  }

  subscribe({ value, valid }: { value: Subscriber, valid: boolean}) {
    console.log(value, valid);
    this.reset();
  }
}