import { HttpClient } from '@angular/common/http';
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
  constructor(private navbar:NavbarService,private http:HttpClient) { }

  ngOnInit(): void {
    this.user=new Object()
  }

  login()
  {

    this.navbar.setMessageForLogin('عرفان');
    
    this.http.post("http://5.160.146.125:8000/api/user/token/",JSON.stringify(this.user))
    .subscribe(res=>
      {
        console.log("result of login: "+ res)
      })
  }

}
