import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  subscriber: FormGroup;
  myValue: string;
  
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.subscriber = this.fb.group({
      name: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', Validators.required]
      }),
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    console.log(this.subscriber.value);
  }

  // reset() {
  //   this.subscriber.reset({
  //     name: {
  //       firstName: '',
  //       lastName: ''
  //     },
  //     email: ''
  //   })
  // }

}
