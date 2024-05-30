import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpclient:HttpClient) { }

  getUserdetails(){
  return this.httpclient.get("http://localhost:3000/Userdata");
  }

  loginValidity(loginValid:any){
    return this.httpclient.get("http://localhost:3000/Userdata",loginValid);

  }
  updateUser(fd:FormData){
    return this.httpclient.put("http://localhost:3000/Userdata",fd);


  }
  
}
