import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  messageForLogin = new Subject<string>()
  message$=this.messageForLogin.asObservable();
  constructor() { 
    if(localStorage.getItem("token")!=null)
    {
      
      
      this.messageForLogin.next("login")
    }
  }
  setMessageForLogin(login)
{
  this.messageForLogin.next(login)
}
}



