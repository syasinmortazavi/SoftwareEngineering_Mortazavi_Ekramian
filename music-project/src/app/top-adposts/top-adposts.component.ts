import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-adposts',
  templateUrl: './top-adposts.component.html',
  styleUrls: ['./top-adposts.component.css']
})
export class TopAdpostsComponent implements OnInit {
  adPosts
  guitarAdPosts;
  public images=[]
  // image="../../assets/image/guitar-1.jpg"
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.adPosts=new Object()
    this.guitarAdPosts = new Object()
    this.http.get("https://localhost:44342/AdPost/GetTopAdPosts").subscribe(res=>
    {
      this.adPosts=res;
      this.adPosts.forEach(item => {
        this.images.push(item.Image)

        
      });
    })

    this.getGuitarAdPosts()
  }
  getAllPostsForUser()
  {
    this.router.navigateByUrl("AdPostsByTypeId")
  }
  AdPostClick(Id)
  {
    localStorage.setItem("AdPostTeacherId",Id)
    this.router.navigateByUrl("teacher")
  }

  getGuitarAdPosts()
  {
    this.http.get("https://localhost:44342/AdPost/GetTopAdPostsByTypeId?TypeId=1").subscribe(res=>
    {
      this.guitarAdPosts=res
    })
  }

}
