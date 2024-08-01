import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup;
  submittedloginForm: boolean = false;

  constructor(private fb:FormBuilder){
    this. loginForm = this.fb.group({
      phonenumber:['',Validators.required]
    })
  }
  onSubmit(){
    this. submittedloginForm = true;
  }
  get f(){
    return this.loginForm.controls;
  }
}