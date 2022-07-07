import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  name:any;
  mail:any;
  phone:any;
  add:any;

  name1:any;
  comments:any;
  mob:any;

  public variable1: String | undefined;
  public variable2: String | undefined;
  public variable3: String | undefined;

  constructor(private router:Router) 
  {


  }
}
