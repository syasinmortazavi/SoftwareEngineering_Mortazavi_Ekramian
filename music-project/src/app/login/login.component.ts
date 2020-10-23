import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user
  constructor(private navbar:NavbarService) { }

  ngOnInit(): void {
    this.user=new Object()
  }

  login()
  {
    this.navbar.setMessageForLogin('عرفان');
    console.log("*********");
    
  }

}
