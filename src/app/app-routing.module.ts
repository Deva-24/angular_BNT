import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ViewordersComponent } from './admin/vieworders/vieworders.component';
import { AdminAuthGuard } from './auth/adminAuth.guard';
import { AuthGuardService } from './auth/auth.guard';
import { LoginActivate } from './auth/autologin.guard';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrdersComponent } from './orders-component/orders-component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PgnotfoundComponent } from './pgnotfound/pgnotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogComponent } from './dialog/dialog.component';



const routes: Routes = [
  { path: 'users/signup', component: SignupComponent},
  { path: 'users/login', component: SigninComponent  },
  { path: 'users/dashboard', component: UserDashboardComponent, },
  { path: 'users/cart', component: CartComponent},
  { path: 'users/orders', component: OrdersComponent}, //, canActivate: [AuthGuardService]
  { path: 'users/about', component:AboutComponent},
  { path: 'users/contact',component:ContactComponent},
  { path: 'users/homepage',component:HomepageComponent},
  { path: '', redirectTo: '/users/login', pathMatch: 'full' },
  { path: 'users/pgnotfound', component:PgnotfoundComponent},
  { path: 'users/navbar', component:NavbarComponent},
  { path: 'users/dialog', component:DialogComponent},


  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/orders', component: ViewordersComponent},
  // , canActivate: [AdminAuthGuard] },
  { path: 'admin/feedback',component:FeedbackComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
