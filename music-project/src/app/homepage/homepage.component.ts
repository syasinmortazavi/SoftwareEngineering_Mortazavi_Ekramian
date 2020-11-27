import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getTypeId(typeId)
  {
    localStorage.setItem("categoryId",typeId)
    this.router.navigateByUrl("AdPostsByTypeId")
  }

}
