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
      ownerName: ['',  [Validators.required, Validators.pattern('^[A-Za-z ]*$'), Validators.minLength(2)]],
      hotelName: ['', Validators.required, Validators.pattern('^[A-Za-z ]*$')],
      hostelName: ['', Validators.required, Validators.pattern('^[A-Za-z ]*$')],
      hotel: ['', Validators.required, Validators.pattern('^[A-Za-z ]*$')],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      hotelRegisterNumber: ['', Validators.required,Validators.pattern('^[0-9]*$')],
    })
  }
  onsubmit(){
    this.loginForm.value;
  }
  preventNumericInput(event: KeyboardEvent) {
    const charCode = event.charCode;
    if (charCode >= 48 && charCode <= 57) { // ASCII codes for 0-9
      event.preventDefault();
    }
  }

}

