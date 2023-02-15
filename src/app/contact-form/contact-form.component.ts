import { ViewportScroller } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  pageYoffset = 0;

  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  @ViewChild('myForm') myForm:any;

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)], []),
    email: new FormControl('', [Validators.required, Validators.email], []),
    message: new FormControl('', [Validators.required, Validators.minLength(5)], []),

  });

constructor(private scroll: ViewportScroller) {
  this.contactForm.valueChanges.subscribe(console.log)
}

 async sendMail() {
    console.log('sending mail...', this.contactForm.value.name)
    this.contactForm.disable();

    let fd = new FormData();
    fd.append('name', this.contactForm.value.name);
    fd.append('email', this.contactForm.value.email);
    fd.append('message', this.contactForm.value.message);

   await fetch('https://can-tuekuecue.developerakademie.net/send_mail/send_mail.php',
    {
      method: 'POST',
      body: fd,
    }
    );
    this.contactForm.reset();
    this.contactForm.enable();
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0,0]);
  }
}
