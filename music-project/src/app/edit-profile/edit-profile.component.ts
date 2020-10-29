import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user_=null;
  message=null
  ConfirmPassword
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.user_=new Object()
  }

  editProfile()
  {
    this.http.post("http://5.160.146.125:8000/api/user/me/",JSON.stringify(this.user_)).subscribe
    (res=>
      {
        console.log("result of editing: "+ res)
      })
  }

}
