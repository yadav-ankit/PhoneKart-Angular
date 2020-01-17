import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/Services/message.service';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Code formatting   (select all ) - --> Shift + Alt + F 

  token: any;
  messageService: MessageService;
  subscription: Subscription;
  userSignedIn: boolean = false;
  messageToShow: string = '';
  router: Router;

  constructor(mymessageServie: MessageService, myrouter: Router) {
    
    console.log("DasBOARDDDDDDDd")
    this.messageService = mymessageServie;
    this.router = myrouter;
    
    this.token = JSON.parse(localStorage.getItem('mytoken'));

    console.log("TOken got from Local ")
    console.log(this.token)
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
    
    this.token = this.messageService.getMessage();

    /*
    if(isNullOrUndefined(this.pageRefreshToken)){
      this.router.navigate(['/home']);
    }
    */
  }

  ngOnDestroy() {
  // this.subscription.unsubscribe();
  }

}

