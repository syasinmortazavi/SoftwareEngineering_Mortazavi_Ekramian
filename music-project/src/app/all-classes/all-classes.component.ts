import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatedVideoComponent } from '../created-video/created-video.component';
import { MainService } from '../main.service';

@Component({
  selector: 'app-all-classes',
  templateUrl: './all-classes.component.html',
  styleUrls: ['./all-classes.component.css']
})
export class AllClassesComponent implements OnInit {
  private guitar = '../../assets/image/download.jpg'
  private piano = '../../assets/image/piano.jpg'
  private threeString = '../../assets/image/Three-string-instrument-4.jpg'
  private santoor = '../../assets/image/unnamed.jpg'
  
  allClasses;
  constructor(private http:HttpClient,private route:Router,private service:MainService) { }

  ngOnInit(): void {
    this.allClasses = new Object()
    
    this.http.get(this.service.path+this.service.classroomPath,this.service.httpOptions).subscribe(res=>
    {
      this.allClasses=res;
    })
    
  }

  classVideos(id)
  {
    localStorage.setItem("classId",id)
    this.route.navigateByUrl("/profile/classVideos")
  }

}
