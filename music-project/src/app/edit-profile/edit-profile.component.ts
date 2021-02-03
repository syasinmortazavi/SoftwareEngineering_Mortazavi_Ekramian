import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user_=null;
  httpOptions
  message;
  loader=false;
  ConfirmPassword
  constructor(private http:HttpClient,private service:MainService) { }

  ngOnInit(): void {
    this.user_=new Object()
    this.message=new Object()
    
    this.loader=true;
    this.http.get("http://5.160.146.125/api/user/me/",this.service.httpOptions).subscribe(
      res=>
      {
        this.user_=res;
        this.user_=this.user_
        console.log("editProfile: "+JSON.stringify(res));
        this.loader=false
        
        
      }
    )
  }

  editProfile()
  {
    this.loader=true
    this.http.put("http://5.160.146.125/api/user/me/",this.user_,this.service.httpOptions).subscribe
    (res=>
      {
        this.loader=false
        this.message["msg"]="با موفقیت ویرایش شد"
        this.message["status"]=true
        console.log("result of editing: "+ res)
      },
      err=>
      {
        this.loader=false
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
      })
  }

}
