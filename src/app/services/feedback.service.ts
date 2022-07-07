import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()
export class feedbackService{
    
    name:any;
    
    constructor(private route:Router){

    }
}