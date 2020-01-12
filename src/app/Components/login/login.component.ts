import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { User } from 'src/app/Models/user';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

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
  outputText : any ;
  router : Router;

  constructor(loginService : LoginService,private myrouter :Router) { 
    this.loginService = loginService;
    this.user = new User();
    this.router = myrouter;
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
    
  let message ;
  this.loginService.loginAPI(this.user).subscribe(res => {
    console.log(res);
    message = res.message;
   // this.outputText = res.message +  " " + res.error + "Token : " + res.token;
  });
  
  if(isNullOrUndefined(message)){
    this.router.navigate(['/dashboard']);
  }
}

}
