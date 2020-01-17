import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../Components/not-found/not-found.component';
import { CartComponent } from '../Components/cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from '../Components/my-profile/my-profile.component';
import { LoginComponent } from '../Components/login/login.component';



export const routes: Routes = [
  { path: 'checkout', component: MyProfileComponent },
  { path: '', component: MyProfileComponent },
  { path: 'notfound', component: NotFoundComponent },
];

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ShopModule { }
