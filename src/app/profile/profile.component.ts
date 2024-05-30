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

  updateUserDetails(formdata:FormData){
    this.profileservice.updateUser(formdata).subscribe(
      {
        next :data=>{ this.snackBar.open("FoodIteam Details Updated successfuly","Thank You",{
          duration: 3000});
        
        }
          ,
        error:data=>{this.snackBar.open("FoodIteam not Updated due to network error",'Undo',{
          duration: 3000});
         
        }
      }
    )
  }
  
  
  
  // userdataAUTH:any;
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
