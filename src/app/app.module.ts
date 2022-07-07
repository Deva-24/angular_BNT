import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninService } from './services/signin.service';
import { SigninComponent } from './signin/signin.component';
import { RestServices } from './services/rest.service';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { OtpServices } from './services/otp.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductServices } from './services/product.service';
import { AuthGuardService } from './auth/auth.guard';
import { UserModel } from './auth/user.model';
import { LoginActivate } from './auth/autologin.guard';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from './services/cart.service';
import { NgxPaginationModule} from 'ngx-pagination';
import { OrdersComponent } from './orders-component/orders-component';
import { OrderServices } from './services/order.service';
import { SwalServices } from './services/swal.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminServices } from './services/admin.service';
import { AdminNavBarComponent } from './admin/admin-nav-bar/admin-nav-bar.component';
import { AdminAuthGuard } from './auth/adminAuth.guard';
import { ViewordersComponent } from './admin/vieworders/vieworders.component';
import { DialogComponent } from './dialog/dialog.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { PgnotfoundComponent } from './pgnotfound/pgnotfound.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    OtpComponent,
    UserDashboardComponent,
    NavBarComponent,
    FooterComponent,
    CartComponent,
    OrdersComponent,
    DashboardComponent,
    AdminNavBarComponent,
    ViewordersComponent,
    DialogComponent,
    FeedbackComponent,
    PgnotfoundComponent,
    ContactComponent,
    AboutComponent,
    HomepageComponent,
    NavbarComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    NgxPaginationModule,
    GooglePayButtonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      }
    }),
    NgxScrollTopModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    SigninService,
    RestServices,
    OtpServices,
    ProductServices,
    AuthGuardService,
    CartService,
    OrderServices,
    SwalServices,
    UserModel,
    LoginActivate,
    AdminAuthGuard,
    AdminServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
