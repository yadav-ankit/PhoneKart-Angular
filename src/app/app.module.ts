import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartModule } from './Components/cart/cart.module';
import { CartComponent } from './Components/cart/cart.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';
import { Router , Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginService } from './Services/login.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { MessageService } from './Services/message.service';
import { ShopModule } from './Modules/shop.module';
import { CanActivateRouteGuard } from './Components/RouteGuard/CanActivateRouteGuard.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ShopModule
  ],
  providers: [LoginService,MessageService,CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
