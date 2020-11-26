import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.css']
})
export class AllTeachersComponent implements OnInit {
  image="default-user.svg"
  teachers;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.teachers=new Object()
    this.http.get("https://localhost:44342/Teacher/GetAllTeachers").subscribe(res=>
  {
    this.teachers=res
  })
  }

  teacherProfile(Id)
  {
    localStorage.setItem("categoryId",Id)
    this.router.navigateByUrl("AdPostsByTypeId")
    
  }

}
