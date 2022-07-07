import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pgnotfound',
  templateUrl: './pgnotfound.component.html',
  styleUrls: ['./pgnotfound.component.css']
})
export class PgnotfoundComponent implements OnInit {

  constructor(private router:Router) { }
  hm()
  {
    this.router.navigate(["users/homepage"]);
  }

  ngOnInit(): void {
  }

}
