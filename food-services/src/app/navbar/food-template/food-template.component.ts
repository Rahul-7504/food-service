import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-template',
  templateUrl: './food-template.component.html',
  styleUrls: ['./food-template.component.scss']
})
export class FoodTemplateComponent {
 
    
  productForm:any=FormGroup
  constructor(private fb:FormBuilder){
    this.productForm=this.fb.group({
      productName:['',Validators.required],
      productPrice:['',Validators.required]
      
    })
  }
  submitted=false
  get formOrder(){
      return this.productForm.controls;
  }
  saveData(){
    this.submitted=true
    console.log(this.productForm.value);
  }
  clearData(){

  }
  
}
