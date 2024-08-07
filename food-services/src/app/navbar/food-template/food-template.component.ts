import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-template',
  templateUrl: './food-template.component.html',
  styleUrls: ['./food-template.component.scss']
})
export class FoodTemplateComponent {
 @Output() closeSiderbar = new EventEmitter<boolean>();
 @Input() isEditMember:any;
 @Input() selectedMemberDetails:any;

    
  productForm:any=FormGroup
  constructor(private fb:FormBuilder){
    this.productForm=this.fb.group({
      productName:['',Validators.required],
      productPrice:['',Validators.required],
      imgUpload:['',Validators.required]
      
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
   this.productForm.reset();
   this.imagePreview = undefined; 
   this.selectedFile = undefined
  }
  selectedFile?: File;
  imagePreview?: string | ArrayBuffer;
 
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }
  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }
 
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }
 
  private handleFile(file: File): void {
    this.selectedFile = file;
 
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result ?? undefined; // Ensure result is not null
    };
    reader.readAsDataURL(file);
  }
  CloseSiderbar() {
    this.closeSiderbar.emit(true);
  }
}

