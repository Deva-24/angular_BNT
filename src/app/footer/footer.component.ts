import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // @ViewChild('name',{static:true})name!:ElementRef;
  @ViewChild('name',{static:true})name!:ElementRef;
  @ViewChild('mail',{static:true})mail!:ElementRef;
  @ViewChild('phone',{static:true})phone!:ElementRef;
  @ViewChild('add',{static:true})add!:ElementRef;

  constructor(private router:Router,private data:DialogService) { }

  ngOnInit(): void {
  }
  dialog()
  {
    this.data.name=this.name.nativeElement.value;
    this.data.mail=this.mail.nativeElement.value;
    this.data.phone=this.phone.nativeElement.value;
    this.data.add=this.add.nativeElement.value;
    this.router.navigate(['users/dialog']);
  }
}
