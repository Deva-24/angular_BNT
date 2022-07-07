import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../services/dialog.service';
import { feedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('name1',{static:true})name1!:ElementRef;
  @ViewChild('mob',{static:true})mob!:ElementRef;
  @ViewChild('comments',{static:true})comments!:ElementRef;

  
  constructor(private route:Router,private data:DialogService) { }

  ngOnInit(): void {
  }

  // send()
  // {
  // this.data.name=this.name.nativeElement.value;
  // this.route.navigate(['admin/feedback'])
  //  }
  
  back()
  {
    this.route.navigate(['users/homepage'])
  }


  go()
  {
    this.data.name1=this.name1.nativeElement.value;
    this.data.mob=this.mob.nativeElement.value;
    this.data.comments=this.comments.nativeElement.value;
    this.route.navigate(['admin/feedback'])
    console.log();
  }

}
