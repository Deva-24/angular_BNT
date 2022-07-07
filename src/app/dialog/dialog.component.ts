import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { DialogService } from '../services/dialog.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  name:any;
  mail:any;
  phone:any;
  add:any;

  totalAmount: number = 0;
  constructor(
    private route:Router,
    private service:DialogService,
    private data:DialogService
    
    )
    {
      
      





     }

  ngOnInit(): void {
    // console.log(this.service.variable1);
    // console.log(this.service.variable2);
    // console.log(this.service.variable3);
    // public var:String = this.service.variable1;
    this.name=this.data.name;
    this.mail=this.data.mail;
    this.phone=this.data.phone;
    this.add=this.data.add;
  }

  // invoicenumber=5+3;

   invoicenumber=Math.ceil(Math.random()*3000)+2;
   trackingnumber=Math.ceil(Math.random()*300+Math.random()*500);
  //  user=this.service.variable1;
  //  email=this.service.variable2;
  //  contact=this.service.variable3;
      

   today = new Date();
   
   public convertToPDF()
   {
   html2canvas(document.body).then(canvas => {
   // Few necessary setting options
    
   const contentDataURL = canvas.toDataURL('image/png')
   let pdf = new jsPDF('p', 'mm', 'a4');                    // A4 size page of PDF
   var width = pdf.internal.pageSize.getWidth();
   var height = canvas.height * width / canvas.width;
   pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
   pdf.save('invoice(copy).pdf');                           // Generated PDF
   });
   }

  
   back()
  {
    this.route.navigate(['users/homepage'])
  }

  



}
