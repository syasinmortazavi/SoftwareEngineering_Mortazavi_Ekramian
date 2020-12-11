import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';


@Component({
  selector: 'app-ad-posts-for-user',
  templateUrl: './ad-posts-for-user.component.html',
  styleUrls: ['./ad-posts-for-user.component.css']
})
export class AdPostsForUserComponent implements OnInit {
  AdPosts;
  typeId=null
  httpOptions=null;
  constructor(private router:Router,private service:MainService) { }
  
  ngOnInit(): void {
    this.AdPosts = new Object()
    var headers_object = new HttpHeaders({
      // 'Content-Type': 'application/json',
       'Authorization': "Token "+localStorage.getItem("token")
    });
     this.httpOptions = {
      headers: headers_object,
      
    };
    if(localStorage.getItem("categoryId"))
    {
    this.typeId=  localStorage.getItem("categoryId")
    }
    if(this.typeId!=null)
    {
    // this.service.http.get("https://localhost:44342/AdPost/GetAllAdPostsByTypeId?TypeId="+localStorage.getItem("categoryId")).subscribe(res=>
    //   {
    //     this.AdPosts=res
    //   })
    this.service.http.get(this.service.path+this.service.advertisementPath+"?tags="+localStorage.getItem("categoryId"),this.httpOptions).subscribe(res=>
      {
        this.AdPosts=res
      })
    
  }
  // else
  // {
  //   this.service.http.get("https://localhost:44342/AdPost/GetAllAdPosts").subscribe(res=>
  //     {
  //       this.AdPosts=res
  //     })
  // }
  
}

AdPostClick(Id)
{
  localStorage.setItem("AdPostTeacherId",Id)
  this.router.navigateByUrl("teacher")
}

}
