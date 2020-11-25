import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ad-posts-for-user',
  templateUrl: './ad-posts-for-user.component.html',
  styleUrls: ['./ad-posts-for-user.component.css']
})
export class AdPostsForUserComponent implements OnInit {
  AdPosts;
  typeId=0
  constructor(private http:HttpClient,private router:Router) { }
  
  ngOnInit(): void {
    this.AdPosts = new Object()
    if(localStorage.getItem("categoryId"))
    {
    this.typeId= parseInt( localStorage.getItem("categoryId"))
    }
    if(this.typeId!=0)
    {
    this.http.get("https://localhost:44342/AdPost/GetAllAdPostsByTypeId?TypeId="+localStorage.getItem("categoryId")).subscribe(res=>
      {
        this.AdPosts=res
      })
  }
  else
  {
    this.http.get("https://localhost:44342/AdPost/GetAllAdPosts").subscribe(res=>
      {
        this.AdPosts=res
      })
  }
  
}

AdPostClick(Id)
{
  localStorage.setItem("AdPostTeacherId",Id)
  this.router.navigateByUrl("teacher")
}

}
