import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../auth/user.model';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2'
import { SwalServices } from '../services/swal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  totalAmount: number = 0;
  currentPage: number = 1;

  constructor(
    private cartService: CartService,
    private userModelService: UserModel,
    private toastr: ToastrService,
    private router: Router,
    private swalServices: SwalServices) {
    this.totalAmount = 0;
    cartService.getCartItemsByUserId(userModelService.getUserId()).subscribe({
      next: (responseData: any) => {
        console.log(responseData);
        this.cartItems = responseData;
        this.totalAmount = 0;
        responseData.forEach((element: any) => {

          this.totalAmount += (element.product.price * element.quantity)
        });

      },
      error: (e: any) => {
        console.log("error occured");
      }
    })
  }

  ngOnInit(): void {
  }

 
  paymentRequest: google.payments.api.PaymentDataRequest={
    
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],

    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },

    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'INR',
      countryCode: 'US'
    },
    callbackIntents:['PAYMENT_AUTHORIZATION']
  };
  
  onLoadPaymentData=(event:Event):
  void =>{const eventDetail= event as CustomEvent<google.payments.api.PaymentData>;
      console.log('load payment data',eventDetail.detail);
  }

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler =(
  paymentData
  ) => { console.log('payment Authorized',paymentData);
  return{ transactionState: 'SUCCESS'};
  }

  onError =(event:ErrorEvent): void =>{
    console.error('error occured',event.error);
  }


  invoice()
  {
    this.router.navigate(["users/orders"]); 
  }

  
  deleteCartItem(cartId: string): any {
    this.cartService.deleteCartItem(this.userModelService.getUserId(), cartId).subscribe({
      next: (responseData: any) => {
        if (responseData) {
          this.toastr.success(undefined, 'Deleted Successfully', { timeOut: 1500 });
          this.totalAmount = 0;
          responseData.forEach((element: any) => {
            this.totalAmount += (element.product.price * element.quantity)
          });
        }
        this.cartItems = responseData

      }, error: () => {
        this.toastr.error(undefined, 'Failed', { timeOut: 1500 })
      }
    })
  }

  addItemToCart(cartId: string) {
    this.cartService.addCartItemInstance(cartId).subscribe({
      next: (responseData: any) => {
        if (responseData != false) {
          this.toastr.success(undefined, 'Added Successfully', { timeOut: 1500 });
          this.cartItems = responseData;
          this.totalAmount = 0;
          responseData.forEach((element: any) => {

            this.totalAmount += (element.product.price * element.quantity)
          });
        }
        else this.toastr.error(undefined, 'Cart Updation Failed', { timeOut: 1500 });
      }, error: (e) => {
        this.toastr.error(undefined, 'Cart Updation Failed', { timeOut: 1500 })
      }
    })
  }

  removeItemFromCart(cartId: string) {
    this.cartService.deleteCartItemInstance(cartId).subscribe({
      next: (responseData: any) => {
        if (responseData != false) {
          this.toastr.success(undefined, 'Deleted Successfully', { timeOut: 1500 });
          this.cartItems = responseData;
          this.totalAmount = 0;
          responseData.forEach((element: any) => {

            this.totalAmount += (element.product.price * element.quantity)
          });
        }
        else this.toastr.error(undefined, 'Cart Updation Failed', { timeOut: 1500 });

      }, error: (e) => {
        console.log(e);
        this.toastr.error(undefined, 'Cart Updation Failed', { timeOut: 1500 })
      }
    })
  }

  executeOrderItems = () => {
    this.cartService.orderItemsFromCart(this.userModelService.getUserId()).subscribe({
      next: (responseData) => {
        if (responseData) {
          this.router.navigate(['/users/orders']);
        } else {
          let data = this.swalServices.showSwalConfirmation({
            title: 'Unable to order',
            text: 'reset cart quantity to max stock?',
            icon: 'error'
          }).then(data => {
            if (data == true) {
              this.cartService.getCartItemsByUserId(this.userModelService.getUserId()).subscribe({
              next: (responseData: any) => {
                console.log(responseData);
                this.cartItems = responseData;
                this.totalAmount = 0;
                responseData.forEach((element: any) => {
                  this.totalAmount += (element.product.price * element.quantity)
                });
                
              },
              error: (e: any) => {
                console.log("error occured");
              }
            })
            }
            
          }).catch(data => {
            console.log("error occured");
          })
        }
      }
    })
  }
}
