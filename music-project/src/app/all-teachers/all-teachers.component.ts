import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.css']
})
export class AllTeachersComponent implements OnInit {
 
  teachers;
  constructor(private service:MainService,private router:Router) { }

  ngOnInit(): void {
    this.teachers=new Object()
    // this.http.get("https://localhost:44342/Teacher/GetAllTeacher").subscribe(res=>
    this.service.http.get(this.service.path+"classroom/teachers/",this.service.httpOptions).subscribe(res=>
  {
    this.teachers=res
  })
  }

  teacherProfile(Id)
  {
    console.log("teacherId: "+Id)
    localStorage.setItem("AdPostTeacherId",Id)
    this.router.navigateByUrl("teacher")
    
  }

  goToChat(email,id)
  {
    localStorage.setItem("currentChatEmail",email)
    localStorage.setItem("currentChatId",id)
    this.router.navigateByUrl("chat")
  }

}
