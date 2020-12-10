import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-created-post',
  templateUrl: './created-post.component.html',
  styleUrls: ['./created-post.component.css']
})
export class CreatedPostComponent implements OnInit {
  loader=false
  httpOptions;
  post;
  constructor(private http:HttpClient) { }

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
    this.http.get("http://5.160.146.125/api/advertisement/my_advertisements/",this.httpOptions).subscribe(
      res=>
      {
        this.post=res;
        
        this.loader=false
        
        
      }
    )
  }
  }


