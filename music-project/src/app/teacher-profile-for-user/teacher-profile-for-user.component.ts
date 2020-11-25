import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-profile-for-user',
  templateUrl: './teacher-profile-for-user.component.html',
  styleUrls: ['./teacher-profile-for-user.component.css']
})
export class TeacherProfileForUserComponent implements OnInit {
  teacher;
  loader=true
  AdPosts;
  //'../../assets/image/download.jpg'
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getTeacher()
    this.teacher=new Object()
    this.AdPosts=new Object()
    this.getTeacherAdPost()
  }

  getTeacher()
  {
    this.http.get("https://localhost:44342/Teacher/GetTeacherById?Id="+localStorage.getItem("AdPostTeacherId")).subscribe(res=>
      {
        this.loader=false;
        localStorage.removeItem("AdPostTeacherId")
        this.teacher.Name=res[0]["Name"]
        this.teacher.Email=res[0]["Email"]
        this.teacher.Bio=res[0]["Bio"]
        this.teacher.AdPosts=res[0]["AdPosts"]
      })
  }

  getTeacherAdPost()
  {
    this.http.get("https://localhost:44342/AdPost/GetAllAdPostByTeacherId?Id="+localStorage.getItem("AdPostTeacherId")).subscribe
    (
      res=>
      {
        this.AdPosts=res
      }
    )
  }

}
