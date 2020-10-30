import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'music-project';

  constructor(private route:Router)
  {
    if(localStorage.getItem("token")!=null)
    {
      this.route.navigateByUrl("profile")
    }
    else
    {
    this.route.navigateByUrl("login")
    }
  }
}
