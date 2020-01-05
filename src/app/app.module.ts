import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { Router , Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes : Routes = [
  {
    path : 'checkout',
    component : CartComponent
  },
  {
    path : 'profile',
    component : MyProfileComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
  
  ];



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
