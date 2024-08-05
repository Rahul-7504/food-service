import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.scss']
})
export class OrderNowComponent {
  
  constructor(private router: Router) { }
  gothrough(){
    console.log('Navigating to food-template');
    this.router.navigate(['food-template']);
  }
}
