import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.scss']
})
export class OrderNowComponent {
  isEditMember=false;
  showSidenar:boolean=false;
  isEditplan =false
  selectedplanDetails: undefined;
  memberitems:any =[{},];

  constructor(private router: Router ,private translate: TranslateService) { }

  closeSiderbar(event:any){
    if(event){
      this.showSidenar=false;
    }
  }
  getopenSLidar(event:any){
this.selectedplanDetails =undefined;
this.isEditplan =false;
this.openplan()
  }
  openplan(){
    this.showSidenar=true;
setTimeout(()=>{
  let p:any = document?.getElementById('openSidepanel');
  if(p){
    p.style.width = '520px';
  }
},10);
  }

  // gothrough(){
  //   console.log('Navigating to food-template');
  //   this.router.navigate(['food-template']);
  // }
}
