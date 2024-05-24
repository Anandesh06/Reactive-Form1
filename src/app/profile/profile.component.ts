import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userdata: any;

  constructor(private profileservice:ProfileService,private snackBar:MatSnackBar){
    this.getUserdata();

  }
  
  
  
  userdataAUTH:any;
    getUserdata(){
    this.profileservice.getUserdetails().subscribe(
      {
        next :(data)=>{
        this.userdata=data;
  
          this.snackBar.open("successfuly Fetched the User Data","Thank You",{
          duration: 3000});
        },
        error:(data)=>{this.snackBar.open("Network error User Data Not Fetched",'Undo',{
          duration: 3000});
         
        }
      }
    )
    }

}
