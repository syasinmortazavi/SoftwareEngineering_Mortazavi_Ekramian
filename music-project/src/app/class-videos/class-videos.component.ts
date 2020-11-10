import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-videos',
  templateUrl: './class-videos.component.html',
  styleUrls: ['./class-videos.component.css']
})
export class ClassVideosComponent implements OnInit {
  classVideos=[{name:"جلسه اول",link:"#"},{name:"جلسه دوم",link:"#"},{name:"جلسه سوم",link:"#"}]
  comment="";
  constructor() { }

  ngOnInit(): void {
  }

}
