import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { FoodsComponent } from './foods/foods.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    LoginComponent,
    AddRestaurantComponent,
    FoodsComponent,
    OrderNowComponent,

  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ReactiveFormsModule
  ]
})
export class NavbarModule { }
