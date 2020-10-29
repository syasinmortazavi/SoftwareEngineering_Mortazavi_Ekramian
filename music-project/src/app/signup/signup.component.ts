import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user;
  message=null;
  ConfirmPassword;
  registerSuccess=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.user=new Object()
    
  }
  setRole(role)
  {
    this.user.user_type=role
    console.log("role: "+this.user.Role);
    
  }

  register()
  {
    
    console.log(this.user)
    console.log(JSON.stringify(this.user))
    this.http.post("http://5.160.146.125:8000/api/user/create/",JSON.stringify(this.user)).subscribe
    {
      res=>console.log("result: "+res)
    }
    
  }

}
