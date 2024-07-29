import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FoodsComponent } from './foods/foods.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrderNowComponent } from './order-now/order-now.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
   },
   {
    path:'login',component:LoginComponent
   },
   {
    path:'foods',component:FoodsComponent
   },
   {
    path:'contactUs',component:ContactUsComponent
   },
   {
    path:'orderNow',component:OrderNowComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
