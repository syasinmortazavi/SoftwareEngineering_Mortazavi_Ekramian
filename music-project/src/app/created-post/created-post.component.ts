import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-created-post',
  templateUrl: './created-post.component.html',
  styleUrls: ['./created-post.component.css']
})
export class CreatedPostComponent implements OnInit {
  loader=false
  httpOptions;
  post;
  constructor(private service:MainService) { }

  ngOnInit(): void {
    this.post=new Object()
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Token "+localStorage.getItem("token")
    });
     this.httpOptions = {
      headers: headers_object
    };
    this.loader=true;
    this.service.http.get(this.service.path+this.service.myAdvertisementPath,this.httpOptions).subscribe(
      res=>
      {
        this.post=res;
        
        this.loader=false
        
        
      }
    )
  }
  }


