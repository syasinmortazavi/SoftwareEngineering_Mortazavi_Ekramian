import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-class-videos',
  templateUrl: './class-videos.component.html',
  styleUrls: ['./class-videos.component.css']
})
export class ClassVideosComponent implements OnInit {
  
  

  
  comment;
  guitar= '../../assets/image/download.jpg'
  selectedVideo;
  classId;
  message;
  class;
  loader;
  tutorials=[]
  httpOptions;
  commentList=[];
  comments=[];
  
  constructor(private http:HttpClient,private elRef: ElementRef,private service:MainService) { }

  ngOnInit(): void {
    
    this.classId=localStorage.getItem("classId")
    this.comment=new Object()
    
    this.message = new Object()
    
    this.message = null;
    this.class=new Object()
    

        var headers_object = new HttpHeaders({
          // 'Content-Type': 'application/json',
           'Authorization': "Token "+localStorage.getItem("token")
        });
         this.httpOptions = {
          headers: headers_object,
          
        };
   
        this.loader=true
        this.http.get(this.service.path+this.service.classroomPath+this.classId,this.httpOptions).subscribe(res=>
        {
        this.class=res
        this.getComments()
     
      
        
        this.class.tutorials.forEach(element => {
          this.http.get(element,this.httpOptions).subscribe(res=>{
             this.tutorials.push(res);
          })

          
          
          
          
        })
        ;
        this.selectedVideo = this.tutorials[0].video
        
        

         
         
        
        
       
          
      
          
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
    this.selectedVideo=this.tutorials[num].video

    console.log("selectedVideo: "+this.selectedVideo)
    const player = this.elRef.nativeElement.querySelector('video');
    player.load();
  }

  addComments()
  {
    
    
    this.comment["classroom"] = this.classId
    this.http.post(this.service.path+this.service.commentPath,this.comment,this.httpOptions).subscribe(res=>
    {
      console.log("ooooooooooooooomad: "+res);
      this.message="با موفقیت ثبت شد"
    })

  }

  getComments()
  {

    this.class.comments.forEach(element => {

      
    

    this.http.get(element,this.httpOptions).subscribe(res=>
    {
      this.comments.push(res);
      
    })
  });
  }

 

}
