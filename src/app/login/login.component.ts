import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private snackbar:MatSnackBar,private loginservices:ProfileService){}
  loginForm=this.fb.group({
    emailId:['',Validators.required],
    password:['',Validators.required]
   }
  )
  hide = true;
  get emailId(){
    return this.loginForm.get('emailId');
  }
  get password(){
    return this.loginForm.get('password');
  }
  responseData:any;
  logindata(){
    const loginValid:any=this.loginForm.value;
    this.loginservices.loginValidity(loginValid).subscribe(
      {
      next :data=>{ this.snackbar.open("Login successfuly","Thank You",{
        duration: 3000});
        this.responseData=data;
      },
      error:data=>{this.snackbar.open("Login failed due to network error",'Undo',{
        duration: 3000})}
    
    })
    }

  

}
