import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';
import { MessageService } from 'src/app/Services/message.service';
import { isNullOrUndefined } from 'util';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

    messageService: MessageService;

  constructor(private mymessageService: MessageService) {
      this.messageService = mymessageService;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let token;
    this.messageService.bSubject.subscribe(res =>{
        token = res;
        localStorage.setItem('mytoken', JSON.stringify(token));
        console.log(res);
        if (isNullOrUndefined(token)) {
            this.messageService.saveMessage(token);
            console.log("return false")
            return false;
          }else{
            console.log("return True")
            return true;
          }
    });
    return true;
  }
}