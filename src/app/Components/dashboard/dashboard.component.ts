import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/Services/message.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { MainService } from 'src/app/Services/main.service';
import {TvmazeService} from 'ankit_tvmaze';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Code formatting   (select all ) - --> Shift + Alt + F 

  token: any;
  messageService: MessageService;
  subscription: Subscription;
  userSignedIn: boolean = false;
  messageToShow: string = '';
  router: Router;
  loginService: LoginService;
  show : Show;

  @Input('message')
  setMessage() {

  }

  constructor(mymessageServie: MessageService, myrouter: Router, private myloginService: LoginService,
    mainService: MainService) {
    this.loginService = myloginService;
    this.messageService = mymessageServie;
    this.router = myrouter;
    this.show.ge
    this.token = JSON.parse(localStorage.getItem('mytoken'));



    this.messageService.bSubject.subscribe(res => {
      //  this.loginService.hello(res);
      mainService.callCartService(res);
    });
    /*
        this.subscription = this.messageService.bSubject.subscribe(res => {
          this.token = res;
          localStorage.setItem('mytoken', JSON.stringify(this.token));
    
          if (!isNullOrUndefined(this.token)) {
            this.userSignedIn = true;
            this.messageService.saveMessage(this.token);
          }
    
          if (this.userSignedIn) {
            this.messageToShow = 'Hi User you are signed in';
            console.log(this.messageToShow)
          } else {
            this.router.navigate(['/home']);
          }
        });
        this.token = this.messageService.getMessage();
    
        */
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  play(x: number) {

  }

}

