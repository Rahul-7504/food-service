import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRoutingModule } from './navbar-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { FoodsComponent } from './foods/foods.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FoodTemplateComponent } from './food-template/food-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    LoginComponent,
    AddRestaurantComponent,
    FoodsComponent,
    OrderNowComponent,
    SignUpComponent,
    FoodTemplateComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class NavbarModule { }
