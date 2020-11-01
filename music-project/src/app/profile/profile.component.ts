import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user_;
  public httpOptions;
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.user_=new Object()
    
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Token "+localStorage.getItem("token")
    });
     this.httpOptions = {
      headers: headers_object
    };

    this.http.get("http://5.160.146.125/api/user/me/",this.httpOptions).subscribe(
      res=>
      {
        this.user_=res;
        this.user_=this.user_
        console.log("editProfile: "+JSON.stringify(res));
        
      }
    )
  }

}
