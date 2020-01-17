import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CanActivateRouteGuard } from './Components/RouteGuard/CanActivateRouteGuard.service';

// https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/

// routes variable is an array of Object..where each elelement is an object of type Routes

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'home', component: AppComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'shop', loadChildren: () => import('./Modules/shop.module').then(m => m.ShopModule) },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent ,
   canActivate: [CanActivateRouteGuard]
},

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


