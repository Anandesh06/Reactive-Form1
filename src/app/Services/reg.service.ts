import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private httpClient:HttpClient) { }
  registrationForm(regdata:FormData){
    console.log(JSON.stringify(regdata));
   
    return this.httpClient.post("http://localhost:3000/data",regdata)
  }



  }
