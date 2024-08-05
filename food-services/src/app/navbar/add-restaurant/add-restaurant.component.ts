import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent {

  userForm:any= FormGroup;
  submitted=false;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
     OwnerName: ['', [Validators.required,Validators.pattern("[a-zA-Z]+$")]],
     HotelName: ['', [Validators.required,Validators.pattern("[a-zA-Z]+$")]],
     HotelLocation: ['', [Validators.required,Validators.pattern("[a-zA-Z]+$")]],
     Hotel: ['', [Validators.required,Validators.pattern("[a-zA-Z]+$")]],
     contactNumber: ['', [Validators.required,Validators.pattern("[a-zA-Z]+$")]],
     hotelRegisterNumber: ['', [Validators.required,Validators.pattern("[a-zA-Z]+$")]],
    });
  }
  submit() {
    this.submitted=true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      alert('SUBMIT SUCCESSFULLY!');
      return
    }
  }





}

