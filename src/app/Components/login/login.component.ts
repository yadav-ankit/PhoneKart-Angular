import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { User } from 'src/app/Models/user';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginService: LoginService;
  user: User;

  name: string;
  email: string;
  password: string;
  username: string;
  outputText: any;
  router: Router;
  error_message: string = null;
  sessionMaintained = new Subject();
  messageService: MessageService;

  constructor(loginService: LoginService, private myrouter: Router, mymessageServie: MessageService) {
    this.loginService = loginService;
    this.user = new User();
    this.router = myrouter;
    this.messageService = mymessageServie;
  }

  signupForm: boolean = false;

  ngOnInit() {
  }

  loadSignupForm() {
    console.log("Ye click ho rha h")
    this.signupForm = true;
    this.username = "";
    this.password = "";
    this.error_message = "";
  }

  loadSigninForm() {
    this.signupForm = false;
    this.error_message = "";

    this.name = '';
    this.password = '';
  }

  signUpService() {

    this.user.name = this.name;
    this.user.password = this.password;
    this.user.email = this.email;
    this.user.username = this.username;

    let message;

    this.loginService.signupAPI(this.user).subscribe(res => {
      console.log(res);

      message = res.message;
      this.error_message = res.error;

      if (!isNullOrUndefined(message)) {
        this.router.navigate(['/dashboard']);
      }

    });


  }

  loginServiceCall() {

    this.user.name = this.name;
    this.user.password = this.password;
    this.user.email = this.email;
    this.user.username = this.username;

    let message;

    this.loginService.loginAPI(this.user).subscribe(res => {

      message = res.message;
      this.error_message = res.error;
    
      if (!isNullOrUndefined(message)) {
        this.messageService.bSubject.next(res.token);
        this.router.navigate(['/dashboard']);
      }
    });

  }

}
