import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes : Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  