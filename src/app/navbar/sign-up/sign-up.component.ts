import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  title = 'toastr';
  userForm:any= FormGroup;
  submitted=false;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required,Validators.pattern("[a-z A-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
    });
  }
  submit() {
    this.submitted=true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      
      return
    }
  }
  reset(){
    console.log(this.userForm.reset);
   
  }
 
  isVisible = false;
 
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
