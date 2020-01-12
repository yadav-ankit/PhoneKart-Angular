import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private myMessage : string;
  public bSubject = new BehaviorSubject(null);



  saveMessage (msg : string){
    this.myMessage = msg;
  }

  getMessage(){
    return this.myMessage;
  }
}
