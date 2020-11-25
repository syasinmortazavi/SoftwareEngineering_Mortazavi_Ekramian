import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-posts-for-user',
  templateUrl: './ad-posts-for-user.component.html',
  styleUrls: ['./ad-posts-for-user.component.css']
})
export class AdPostsForUserComponent implements OnInit {
  AdPosts;
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    this.AdPosts = new Object()
    this.http.get("").subscribe(res=>
      {
        this.AdPosts=res
      })
  }

}
