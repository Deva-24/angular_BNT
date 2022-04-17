import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }
  temp()
  {
    this.router.navigate(["users/dashboard"]);
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
  logAlert()
  { 
    Swal.fire({
      title: 'You will Missout Our Deals :(',
      text: 'Are you sure want to logout ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'Stay and Shop',
    }).then((result) => {
      if (result.value) {
        this.router.navigate(["users/signup"]);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Happy shopping :)', 'error');
      }
    });
  }


  ngOnInit(): void {
  }

}