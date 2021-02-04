import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-created-video',
  templateUrl: './created-video.component.html',
  styleUrls: ['./created-video.component.css']
})
export class CreatedVideoComponent implements OnInit {
  class;
  message
  tutorials=[]
  constructor(private http:HttpClient,private route:Router,private service:MainService) { }

  classVideos(id)
  {
    localStorage.setItem("classId",id)
    this.route.navigateByUrl("/profile/classVideos")
  }

  ngOnInit(): void {
    
   this.getClasses();

  }

  getClasses()
  {
    this.message = new Object()
    this.class=new Object()
    

        var headers_object = new HttpHeaders({
          // 'Content-Type': 'application/json',
           'Authorization': "Token "+localStorage.getItem("token")
        });
        const httpOptions = {
          headers: headers_object,
          
        };
        
        this.http.get(this.service.path+this.service.myClassroomsPath,httpOptions).subscribe(res=>
        {
        this.class=res
     
       
          
      
          
        },
        err=>
        {
            
            this.message["status"]=false
            this.message["msg"]="خطا در انجام عملیات"
        })
  }

}
