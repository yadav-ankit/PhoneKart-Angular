import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  signupForm : boolean = false;

  ngOnInit() {
  }

  loadSignupForm(){
    console.log("Ye click ho rha h")
    this.signupForm = true;
  }

  loadSigninForm(){
    this.signupForm = false;
  }

}
