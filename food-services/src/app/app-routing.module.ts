import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'navbar/home', pathMatch: 'full' },
  { path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule) },
  { path: '', redirectTo: 'navbar/login', pathMatch: 'full' },
  { path: '', redirectTo: 'navbar/home', pathMatch: 'full' },
  { path: '', redirectTo: 'navbar/foods', pathMatch: 'full' },
  { path: '', redirectTo: 'navbar/contactUs', pathMatch: 'full' },
  { path: '', redirectTo: 'navbar/orderNow', pathMatch: 'full' },
  { path: '', redirectTo: 'navbar/signUp', pathMatch: 'full' },
  { path: '', redirectTo: 'navbar/foodTemplate', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
