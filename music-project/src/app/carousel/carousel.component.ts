import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = ["../../assets/image/slideshow-2.jpg","../../assets/image/slideshow-3.jpg","../../assets/image/slideshow-1.jpg"];
  constructor() { }

  ngOnInit(): void {
  }

}
