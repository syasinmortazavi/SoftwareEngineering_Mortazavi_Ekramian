import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-adpost',
  templateUrl: './create-adpost.component.html',
  styleUrls: ['./create-adpost.component.css']
})
export class CreateAdpostComponent implements OnInit {
  adPost;
  message;
  loader=false
  selectedFile:File=null
  progress=0
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.adPost=new Object()
    this.adPost.tags=['guitar']
    this.message = new Object()
    
  }

  sendAdPost()
  {
    
    const fd = new FormData()
    fd.append('image',this.adPost.image)
    fd.append('caption',this.adPost.caption)
    fd.append('tags',this.adPost.tags)
    console.log("adPost: "+ JSON.stringify(this.adPost));
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
        this.http.post("http://5.160.146.125/api/advertisement/my_advertisements/",fd,httpOptions).subscribe(res=>
        {
          
        this.message["msg"]="با موفقیت ایجاد شد"
        this.message["status"]=true
          console.log("result of creating adPost: "+ JSON.stringify(res));
          if (res["type"] === HttpEventType.Response) {
            console.log('Upload complete');
            this.loader=false
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

    this.adPost.image=e.target.files[0]
    this.selectedFile=e.target.files[0]
    
    
    console.log(e.target.files[0])
    console.log(this.adPost.image);
    
  }

  setTag(tag)
  {
    this.adPost.tags=[tag]

  }

}
