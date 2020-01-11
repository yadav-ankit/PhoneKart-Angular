import { Component } from '@angular/core';
import { MyProfileService } from './Services/my-profile.service';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhoneKart';
  textToPrint = '';
  mainUser = '';
  user : any;
  constructor(private myProfileService: MyProfileService) {

    this.user = {
      firstName : 'Ankit',
      lastName : 'Yadav'
    }
  }

  ngOnInit() {
    if(this.mainUser != ''){
      this.mainUser = 'Login/SignUp';
    }else{
      this.mainUser = 'Hi ' + this.user.firstName;
    }
  }
  public clickMethod(){
    this.myProfileService.getMyDetails().subscribe(res =>{
      console.log(res);
      this.textToPrint = "  " + res.message;
    });
  }

}
