import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent {
  loginForm: any = FormGroup;
  constructor(private fb:FormBuilder){
    this.loginForm=this.fb.group({
      ownerName: ['', Validators.required],
      hotelName: ['', Validators.required],
      hostelName: ['', Validators.required],
      hotel: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      hotelRegisterNumber: ['', Validators.required],
    })
  }
  onsubmit(){
    this.loginForm.value;
  }

}
