import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user
  message;
  loader=false
  constructor(private navbar:NavbarService,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.user=new Object()
    this.message=new Object();
    this.message=null
  }

  login()
  {
    this.loader=true
    
    let header = new HttpHeaders({'content-type': 'application/json'});
    const options={headers:header}
    this.http.post("http://5.160.146.125/api/user/token/",JSON.stringify(this.user),options)
    .subscribe(res=>
      {
        this.navbar.setMessageForLogin('login');
        if(res["token"])
        {
          this.loader=false
          localStorage.setItem("token",res["token"])
          this.route.navigateByUrl("profile")

        }
        else
        {
          this.message="نام کاربری یا رمز عبور اشتباه است"
        }
        console.log("result of login: "+ res)
      }
      ,
      err=>
      {
        this.loader=false
        this.message="نام کاربری یا رمز عبور اشتباه است"
      })
  }

}
