import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-videos',
  templateUrl: './class-videos.component.html',
  styleUrls: ['./class-videos.component.css']
})
export class ClassVideosComponent implements OnInit {
  videotest="../../assets/image/test.mp4"
  videotest2="../../assets/image/test2.mp4"

  classVideos=[{name:"جلسه اول",link:this.videotest},{name:"جلسه دوم",link:this.videotest2},{name:"جلسه سوم",link:"#"}]
  comment="";
  guitar= '../../assets/image/download.jpg'
  selectedVideo;
  classId;
  message;
  class;
  loader;
  constructor(private http:HttpClient,private elRef: ElementRef) { }

  ngOnInit(): void {
    this.selectedVideo=this.classVideos[0]["name"];
    this.classId=localStorage.getItem("classId")
    this.selectedVideo = this.videotest
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
        this.http.get("http://5.160.146.125/api/classroom/my_classrooms/"+this.classId,httpOptions).subscribe(res=>
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

  changeVideo(num)
  {
    this.selectedVideo=this.classVideos[num].link

    console.log("selectedVideo: "+this.selectedVideo)
    const player = this.elRef.nativeElement.querySelector('video');
    player.load();
  }

}
