import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login=null;
  constructor(private navservice:NavbarService,private route:Router) { }

  ngOnInit(): void {
      this.navservice.message$.subscribe(msg=>
      {
        console.log("msghoooooooooy: "+msg);
        
        this.login=msg
      })
      if(this.login == null && localStorage.getItem("token")!=null)
      {
        this.login="login"
      }
  }
  logout()
  {
    this.navservice.messageForLogin.next(null);
    localStorage.removeItem("token")
    this.route.navigateByUrl('/login')
  }
  

}
