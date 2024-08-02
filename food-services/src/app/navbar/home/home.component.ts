import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 

  locations = ['Sangamner', 'Nashik', 'Pune'];
  homeForm: any;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.homeForm = this.fb.group({
      location: [null, Validators.required],
      search: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.homeForm.valid) {
      console.log(this.homeForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
