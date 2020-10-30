import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loader=false
  user;
  message;
  ConfirmPassword;
  registerSuccess=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.user=new Object()
    this.user.user_type=1
    this.message=new Object()
    
    
  }
  setRole(role)
  {
    this.user.user_type=role
    console.log("role: "+this.user.Role);
    
  }

  register()
  {
    this.loader=true;
    let header = new HttpHeaders({'content-type': 'application/json'});
    const options={headers:header}
    console.log(this.user)
    console.log(JSON.stringify(this.user))
    this.http.post("http://5.160.146.125/api/user/create/",JSON.stringify(this.user),options).subscribe(
     
      res=>{
      this.loader=false;
      console.log("status: "+res["status"]);
      console.log(JSON.stringify(res));

        this.message["msg"]="با موفقیت انجام شد"
        this.message["status"]=true;
      
    },
    err=>
    {
      this.loader=false
      console.log("error status: "+err["status"]);
      console.log(JSON.stringify(err));
      
      if(err["error"]["email"]!=null)
      {
        
        this.message["status"]=false
          this.message["msg"]="ایمیل تکراری است"
        
        if(err["error"]["email"][0]=="user with this email already exists.")
        {
          this.message["status"]=false
          this.message["msg"]="ایمیل تکراری است"
        }
      }
      else
      {
        this.message["status"]=false
          this.message["msg"]="خطا در انجام عملیات"
      }
      
    }
    
    )
    
    
    
  }

}
