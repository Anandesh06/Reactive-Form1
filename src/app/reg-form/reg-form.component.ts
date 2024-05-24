import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { RegService } from '../Services/reg.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent {
  constructor(private fb:FormBuilder,private regservices:RegService ,private snackBar:MatSnackBar,private myrouter:Router) {}
  
  registration=this.fb.group({
    name:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    emailId:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password:['',[Validators.required ,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")]],
    cpassword:['',Validators.required],
    mobileNo:['',[Validators.required,Validators.pattern("[6-9]{1}[0-9 ]{9}")]],
     
    address:this.fb.group({
      houseNo: ['', [Validators.required,Validators.pattern("[-_0-9]*")]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required]
    })
   },{validators:this.checkconfirmpwd}
  )

  get name(){
    return this.registration.get('name');
  }

  get emailId(){
    return this.registration.get('emailId');
  }
  get password(){
    return this.registration.get('password');
  }
  get cpassword(){
    return this.registration.get('cpassword');
  }
  get mobileNo(){
    return this.registration.get('mobileNo');
  }
  get houseNo(){
    return this.registration.get('houseNo');
  }
  get street(){
    return this.registration.get('street');
  }
  get city(){
    return this.registration.get('city');
  }
  get pincode(){
    return this.registration.get('pincode');
  }

  checkconfirmpwd(p:AbstractControl){
    const pwd=p.get('password')?.value;
    const cpwd=p.get('cpassword')?.value;
  
    // console.log(pwd,cpwd);
    if(cpwd!=pwd){
    
      return {checkpwd:false}
    }
      return null;
      
  }


  regform(event: any) {
    event.preventDefault(); // Prevent default form submission
    const imageInput: HTMLInputElement = event.target.querySelector('#file');
    if (imageInput && imageInput.files && imageInput.files.length > 0) {
    const file: File = imageInput.files[0]; // Get the selected file
  
  // console.log(this.registration.value);
  if (this.registration.value) {
    const formData = new FormData();
    formData.append('user', new Blob([JSON.stringify(this.registration.value)],{type: 'application/json'}));
    // formData.append('user', this.registration.value);  
    const filename:string="Registration-Form\src\assets\profileimage"+file.name;
    
    if (file) {
      // formData.append('imageFile',file,filename);
      
    }
    // const data=Object.fromEntries(formData);
console.log(filename);
 
    this.regservices.registrationForm(formData).subscribe(
      {
      next :data=>{
        // console.log(data);
        this.snackBar.open("Registered successfuly","Thank You",{
        duration: 3000});
        this.myrouter.navigate(["profile"])
      }
        ,
      error:data=>{this.snackBar.open("Registration failed due to network error",'Undo',{
        duration: 3000})
      }})
  }
      
      }
    }

}
