import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user;
  message=null;
  ConfirmPassword;
  registerSuccess=false;
  constructor() { }

  ngOnInit(): void {
    this.user=new Object()
    
  }
  setRole(role)
  {
    this.user.Role=role
    console.log("role: "+this.user.Role);
    
  }

  register()
  {
    console.log("register");
    console.log(this.user)
    console.log(JSON.stringify(this.user))
    
  }

}
