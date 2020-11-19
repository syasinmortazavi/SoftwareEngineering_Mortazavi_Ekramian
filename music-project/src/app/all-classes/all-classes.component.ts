import { Component, OnInit } from '@angular/core';
import { CreatedVideoComponent } from '../created-video/created-video.component';

@Component({
  selector: 'app-all-classes',
  templateUrl: './all-classes.component.html',
  styleUrls: ['./all-classes.component.css']
})
export class AllClassesComponent implements OnInit {
  private guitar = '../../assets/image/download.jpg'
  private piano = '../../assets/image/piano.jpg'
  private threeString = '../../assets/image/Three-string-instrument-4.jpg'
  private santoor = '../../assets/image/unnamed.jpg'
  
  allClasses=[{cost:0,creator:"تست",img:this.threeString,title:"کلاس سه تار"},
              {cost:120000,creator:"تست",img:this.santoor,title:"کلاس سنتور"},
              {cost:250000,creator:"تست",img:this.guitar,title:"کلاس گیتار"},
              {cost:0,creator:"تست",img:this.piano,title:"کلاس پیانو"}
            ]
  constructor() { }

  ngOnInit(): void {
    
  }

}
