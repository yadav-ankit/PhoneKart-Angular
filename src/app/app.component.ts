import { Component } from '@angular/core';
import { MyProfileService } from './my-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhoneKart';

  constructor(private productService: MyProfileService) {

  }

  public clickMethod(){
    
  }

}
