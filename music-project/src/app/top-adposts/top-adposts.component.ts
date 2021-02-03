import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-top-adposts',
  templateUrl: './top-adposts.component.html',
  styleUrls: ['./top-adposts.component.css']
})
export class TopAdpostsComponent implements OnInit {
  adPosts
  guitarAdPosts;
  pianoAdPosts;
  public images=[]
  // image="../../assets/image/guitar-1.jpg"
  constructor(private service:MainService,private router:Router) { }

  ngOnInit(): void {
    this.pianoAdPosts=new Object()
    this.adPosts=new Object()
    this.guitarAdPosts = new Object()
    

    this.getGuitarAdPosts()
    this.getPianoAdPosts()
  }
  getAllPostsForUser()
  {
    localStorage.setItem("categoryId",'0')
    this.router.navigateByUrl("AdPostsByTypeId")
  }
  AdPostClick(Id)
  {
    console.log("AdPostClickId: "+Id);
    
    localStorage.setItem("AdPostTeacherId",Id)
    this.router.navigateByUrl("teacher")
  }

  getGuitarAdPosts()
  {
    this.service.http.get(this.service.path+this.service.advertisementPath+"?tags=guitar",this.service.httpOptions).subscribe(res=>
    {
      this.guitarAdPosts=res
      this.guitarAdPosts=this.guitarAdPosts.filter((i, index) => (index < 6))

    })
  }

  getPianoAdPosts()
  {
    this.service.http.get(this.service.path+this.service.advertisementPath+"?tags=piano",this.service.httpOptions).subscribe(res=>
    {
      this.pianoAdPosts=res
      this.pianoAdPosts = this.pianoAdPosts.filter((i, index) => (index < 6))
    })
  }

  getTypeId(typeId)
  {
    localStorage.setItem("categoryId",typeId)
    this.router.navigateByUrl("AdPostsByTypeId")
  }

}
