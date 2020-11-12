import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-videos',
  templateUrl: './class-videos.component.html',
  styleUrls: ['./class-videos.component.css']
})
export class ClassVideosComponent implements OnInit {
  classVideos=[{name:"جلسه اول",link:"#"},{name:"جلسه دوم",link:"#"},{name:"جلسه سوم",link:"#"}]
  comment="";
  guitar= '../../assets/image/download.jpg'
  selectedVideo;
  constructor() { }

  ngOnInit(): void {
    this.selectedVideo=this.classVideos[0]["name"];
  }

  changeVideo(num)
  {
    this.selectedVideo=this.classVideos[num]["name"]
  }

}
