import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submittedloginForm: boolean = false;
  isHideshow: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      phonenumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit() {
    // this.isHideshow = true;
    this.submittedloginForm = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }


  changePhoneNumber(){
    if(this.phonenumber?.valid){
      this.isHideshow=true;
    }else{
      this.isHideshow=false;
    }
  }


  get phonenumber() {
    return this.loginForm.get('phonenumber');
  }

  onDigit(event: any, previous: any, next: any): void {
    const input = event.target.value;
    if (/\d/.test(input)) {
      if (next !== null) {
        next.focus();
      }
    } else if (event.code === 'Backspace' && previous !== null) {
      previous.focus();
      previous.value = '';
    }
  }
}
