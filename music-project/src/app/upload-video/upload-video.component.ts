import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {
  classNames=[{name:"گیتار",value:"1"},{name:"پیانو",value:"2"}]
  classNameValue;
  video;
  message;
  loader=true
  selectedFile:File=null
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.video=new Object()
    this.message = new Object()
    console.log("class: "+this.classNameValue)
    
  }

  test()
  {
    console.log("class: "+this.classNameValue)
  }

  sendvideo()
  {
    
    const fd = new FormData()
    fd.append('video',this.video.file)
    fd.append('caption',this.video.caption)
    console.log("video: "+ JSON.stringify(this.video));
        var headers_object = new HttpHeaders({
          // 'Content-Type': 'application/json',
           'Authorization': "Token "+localStorage.getItem("token")
        });
        const httpOptions = {
          headers: headers_object
        };
        this.loader=true
        this.http.post("http://5.160.146.125/api/advertisement/advertisements/",fd,httpOptions).subscribe(res=>
        {
          this.loader=false
        this.message["msg"]="با موفقیت ایجاد شد"
        this.message["status"]=true
          console.log("result of creating video: "+res);
          
        },
        err=>
        {
            this.loader=false
            this.message["status"]=false
            this.message["msg"]="خطا در انجام عملیات"
        })

    
  }
  fileChangeEvent(e)
  {

    this.video.file=e.target.files[0]
    this.selectedFile=e.target.files[0]
    
    
    console.log(e.target.files[0])
    console.log(this.video.file);
    
  }

}
