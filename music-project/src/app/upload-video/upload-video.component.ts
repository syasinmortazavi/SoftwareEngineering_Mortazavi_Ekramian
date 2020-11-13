import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {
  classNames=[{name:"گیتار",value:"1"},{name:"پیانو",value:"2"}]
  selectedClassId=1;
  video;
  class
  message;
  loader=true
  progress;
  ;
  selectedFile:File=null
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.video=new Object()
    this.message = new Object()
    this.class=new Object()
    

        var headers_object = new HttpHeaders({
          // 'Content-Type': 'application/json',
           'Authorization': "Token "+localStorage.getItem("token")
        });
        const httpOptions = {
          headers: headers_object,
          
        };
        this.loader=true
        this.http.get("http://5.160.146.125/api/classroom/classrooms/",httpOptions).subscribe(res=>
        {
        this.class=res
       
          
      
          
        },
        err=>
        {
            this.loader=false
            this.message["status"]=false
            this.message["msg"]="خطا در انجام عملیات"
        })

    
  }

  test(e)
  {
    this.selectedClassId=e
    console.log("class: "+e["target"]["value"])
  }

  sendvideo()
  {
    
    const fd = new FormData()
    fd.append('video',this.video.file)
    fd.append('description',this.video.caption)
    fd.append('classroom',this.selectedClassId.toString())
        var headers_object = new HttpHeaders({
          // 'Content-Type': 'application/json',
           'Authorization': "Token "+localStorage.getItem("token")
        });
        const httpOptions = {
          headers: headers_object,
          reportProgress: true,
          observe: 'events' as 'body'
        };
        this.loader=true
        this.http.post("http://5.160.146.125/api/classroom/tutorials/",fd,httpOptions).subscribe(res=>
        {
          
        
          console.log("result of creating adPost: "+ JSON.stringify(res));
          if (res["type"] === HttpEventType.Response) {
            console.log('Upload complete');
            this.loader=false
            this.message["msg"]="با موفقیت ایجاد شد"
            this.message["status"]=true
        }
        if (res["type"] === HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * res["loaded"] / res["total"]);
            this.progress=percentDone;
            console.log('Progress ' + percentDone + '%');
        } 
          
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
