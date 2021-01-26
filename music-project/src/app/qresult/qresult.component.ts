import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-qresult',
  templateUrl: './qresult.component.html',
  styleUrls: ['./qresult.component.css']
})
export class QresultComponent implements OnInit {

  constructor(private service:MainService,private router:Router) { }
  teachers
  ngOnInit(): void {
    this.teachers=new Object()
    
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

}
