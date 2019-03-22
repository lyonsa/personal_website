import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(private emailService: EmailService) { }

  ngOnInit() { }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */

  processForm() {
    const email = {
      'to': 'allyons16@gmail.com',
      'subject': `Message from ${this.name}`,
      'html': `<p>${this.message}<br>sent from ${this.email}</p> `,
      'sendername':`${this.name}`
    };
    console.log(email);
    this.emailService.sendEmail(email);
  }

}
