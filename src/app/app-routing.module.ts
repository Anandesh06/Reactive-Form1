import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
   },{
    path:"home",
    component:HomeComponent
   },{
    path:"registration",
    component:RegFormComponent
   },{
    path:"profile",
    component:ProfileComponent
   },{
    path:"Login",
    component:LoginComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
