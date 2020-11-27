import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreatedVideoComponent } from '../created-video/created-video.component';

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
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.allClasses = new Object()
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Token "+localStorage.getItem("token")
    });
    const httpOptions = {
      headers: headers_object,
      
    };

    this.http.get("http://5.160.146.125/api/classroom/classrooms/").subscribe(res=>
    {
      this.allClasses=res;
    })
    
  }

}
