import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public path="http://5.160.146.125/api/"
  public advertisementPath="advertisement/advertisements/"
  public httpOptions
  constructor(public http:HttpClient) {
    var headers_object = new HttpHeaders({
      // 'Content-Type': 'application/json',
       'Authorization': "Token "+localStorage.getItem("token")
    });
     this.httpOptions = {
      headers: headers_object,
      
    };
   }
}
