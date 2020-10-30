import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.adPost=new Object()
    this.message = new Object()
  }

  sendAdPost()
  {
    
    const fd = new FormData()
    fd.append('image',this.adPost.image)
    fd.append('caption',this.adPost.caption)
    console.log("adPost: "+ JSON.stringify(this.adPost));
        var headers_object = new HttpHeaders({
          // 'Content-Type': 'application/json',
           'Authorization': "Token "+localStorage.getItem("token")
        });
        const httpOptions = {
          headers: headers_object
        };

        this.http.post("http://5.160.146.125/api/advertisement/advertisements/",fd,httpOptions).subscribe(res=>
        {
          this.loader=false
        this.message["msg"]="با موفقیت ایجاد شد"
        this.message["status"]=true
          console.log("result of creating adPost: "+res);
          
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

}
