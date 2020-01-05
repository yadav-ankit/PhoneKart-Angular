import { Component } from '@angular/core';
import { MyProfileService } from './my-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhoneKart';
  textToPrint = '';
  constructor(private myProfileService: MyProfileService) {

  }

  public clickMethod(){
    this.myProfileService.getMyDetails().subscribe(res =>{
      console.log(res);
      this.textToPrint = res;
    });
  }

}
