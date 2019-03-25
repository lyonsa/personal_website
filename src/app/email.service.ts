import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class EmailService {
  apiUrl = 'https://lyonsasite-1b11.restdb.io/mail';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-apikey':'5c9544b1df5d634f46ecaddc',
    })
  };
  constructor(private http: HttpClient) {}


  sendEmail(mail){
    console.log(mail);
    return this.http.post(this.apiUrl, mail, this.httpOptions)
      .subscribe(
        data => {}
      ),
      error => {
        console.log("ERROR WITH POST REQUEST ", error);
      }
  }
}
