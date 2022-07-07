import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { feedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  name1:any;
  comments:any;
  mob:any;
  constructor(private data:DialogService) { }

  ngOnInit(): void {
  this.name1=this.data.name1;
  this.comments=this.data.comments;
  this.mob=this.data.mob;
  }

}
