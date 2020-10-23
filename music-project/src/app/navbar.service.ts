import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  messageForLogin = new Subject<string>()
  message$=this.messageForLogin.asObservable();
  constructor() { }
  setMessageForLogin(userName)
{
  this.messageForLogin.next(userName)
}
}



