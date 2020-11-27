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
  teacherPicture
  comment;
  comments;
  message=null
  //'../../assets/image/download.jpg'
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.comments=new Object()
    this.comment=new Object();
    this.comment.msg=""
    this.getTeacher()
    this.teacher=new Object()
    this.AdPosts=new Object()
    this.getTeacherAdPost()
    this.getComments()
  }

  getTeacher()
  {
    this.http.get("https://localhost:44342/Teacher/GetTeacherById?Id="+localStorage.getItem("AdPostTeacherId")).subscribe(res=>
      {
        this.loader=false;
        
        this.teacher.Name=res[0]["Name"]
        this.teacher.Email=res[0]["Email"]
        this.teacher.Bio=res[0]["Bio"]
        this.teacher.AdPosts=res[0]["AdPosts"]
        this.teacher.Image=res[0]["Image"]
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

  getComments()
  {
    this.comment.teacherId=parseInt(localStorage.getItem("AdPostTeacherId"))
    this.http.get("https://localhost:44342/Teacher/getComment?teacherId="+this.comment.teacherId).subscribe(res=>
    {
      this.comments=res;
      console.log(res);
      
    })
  }

  addComments()
  {
    
    
    this.comment.teacherId=parseInt(localStorage.getItem("AdPostTeacherId"))
    this.http.get("https://localhost:44342/Teacher/AddComment?teacherId="+this.comment.teacherId+"&msg="+this.comment.msg).subscribe(res=>
    {
      
      console.log(res);
      
      this.message=res;
      this.getComments()
      
    })
  }

}
