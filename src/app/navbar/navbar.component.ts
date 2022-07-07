import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../auth/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userModel: UserModel ,private router:Router) { }
  temp()
  {
    this.router.navigate(["users/dashboard"]);
  }
  home()
  {
    this.router.navigate(["users/homepage"]);
  }
  about()
  {
    this.router.navigate(["users/about"]);
  }
  orders()
  {
    this.router.navigate(["users/orders"]);
  }
  contact()
  {
    this.router.navigate(["users/contact"]);
  }
  cart()
  {
    this.router.navigate(["users/cart"]);
  }


  executeLogOut() {
    this.userModel.setUserValidationStatus(false);
    this.userModel.setUserId("");
    this.router.navigate(['/users', 'login']); 
 
  }

  ngOnInit(): void {
  }

}
