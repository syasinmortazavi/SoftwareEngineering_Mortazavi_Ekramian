import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
class;
selectedFile=null;
loader=false;
message;
progress=0
  constructor(private http:HttpClient,private service:MainService) { }

  fileChangeEvent(e)
  {
    this.class.image=e.target.files[0]
    this.selectedFile=this.class.image
  }
  createClass()
  {
    
    const fd = new FormData()
    fd.append('image',this.class.image)
    fd.append('caption',this.class.caption)
    console.log("class: "+ JSON.stringify(this.class));
        var headers_object = new HttpHeaders({
          // 'Content-Type': 'application/json',
           'Authorization': "Token "+localStorage.getItem("token")
        });
        const httpOptions = {
          headers: headers_object,
          
        };
        this.loader=true
        this.http.post(this.service.path+this.service.myClassroomsPath,this.class,httpOptions).subscribe(res=>
        {
          
        this.message["msg"]="با موفقیت ایجاد شد"
        this.message["status"]=true
          console.log("result of creating class: "+ JSON.stringify(res));
      
          
        },
        err=>
        {
            this.loader=false
            this.message["status"]=false
            this.message["msg"]="خطا در انجام عملیات"
        })

    
  }

  ngOnInit(): void {
    this.class=new Object();
    this.message = new Object()
  }

}
