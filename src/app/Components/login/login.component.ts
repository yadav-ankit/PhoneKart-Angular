import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginService : LoginService;
  user : User;

  name : string ;
  email : string;
  password : string;
  username : string;


  constructor(loginService : LoginService) { 
    this.loginService = loginService;
    this.user = new User();
  }

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

  signUpService(){


    this.user.name = this.name;
    this.user.password = this.password;
    this.user.email = this.email;
    this.user.username = this.username;

    this.loginService.signupAPI(this.user).subscribe(res => {
      console.log(res);
    });

  }
  
  loginServiceCall(){

    this.user.name = this.name;
    this.user.password = this.password;
    this.user.email = this.email;
    this.user.username = this.username;
  
  this.loginService.loginAPI(this.user).subscribe(res => {
    console.log(res);
  });
  }

}
