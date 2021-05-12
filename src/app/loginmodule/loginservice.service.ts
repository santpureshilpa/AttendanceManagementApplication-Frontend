import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private httpClient: HttpClient) {

    

  }

  login(loginData: any){
    //alert(loginData.username + " " + loginData.password + " " + loginData.userType);
    return this.httpClient.post('http://localhost:9090/login/user', loginData, {responseType:'text'});
  }
}
