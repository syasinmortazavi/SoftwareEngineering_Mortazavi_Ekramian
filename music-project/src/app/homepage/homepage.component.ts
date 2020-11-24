import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  santoor="../../assets/image/santoor.svg"
  guitar="../../assets/image/guitar.svg"
  piano="../../assets/image/piano.svg"
  violin="../../assets/image/violin.svg"
  flute="../../assets/image/flute.svg"
  sitar="../../assets/image/sitar.svg"
  constructor() { }

  ngOnInit(): void {
  }

}
