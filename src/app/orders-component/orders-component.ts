import { Component, OnInit } from '@angular/core';
import { UserModel } from '../auth/user.model';
import { OrderServices } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-component',
  templateUrl: './orders-component.html',
  styleUrls: ['./orders-component.css']
})
export class OrdersComponent implements OnInit {

  ordersInformation: any[] = [];
  currentPage: number = 1;

  constructor(private router:Router,private ordersService: OrderServices, private userModel: UserModel) { 
    this.ordersService.getAllOrdersByUserId(this.userModel.getUserId()).subscribe({
      next: (responseData: any) => {
        this.ordersInformation = responseData;
        console.log(this.ordersInformation)
      }, error: (e: any) => {
        console.log(e)
      } 
    })
   }

  ngOnInit(): void {

  }
  // dialog()
  // {
  //   this.router.navigate(['users/dialog']);
  // }

}
