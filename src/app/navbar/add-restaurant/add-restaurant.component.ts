import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


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

      OwnerName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$'), this.noOnlySpacesValidator]],
     HotelName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$'),this.noOnlySpacesValidator]],
     HotelLocation: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$'),this.noOnlySpacesValidator]],
     Hotel: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$'),this.noOnlySpacesValidator]],
     contactNumber: ['', [Validators.required,Validators.pattern(/^\d{10}$/)]],
     hotelRegisterNumber: ['', [Validators.required,Validators.pattern(/^\d{10}$/)]],
    });
  }
  submit() {
    this.submitted=true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);

    }
    const ownerNameWithoutSpaces = this.userForm.value.OwnerName.replace(/\s+/g, '');
    console.log('OwnerName without spaces:', ownerNameWithoutSpaces);
  }
  noOnlySpacesValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (control.value && control.value.trim().length === 0) {
      return { 'onlySpaces': true };
    }
    return null;
  }
  }







