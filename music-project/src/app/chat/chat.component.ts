import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  activeChat=1
  message;
  constructor() { }
  

  ngOnInit(): void {
    this.message=new Object()
    this.message.Text=''
    this.message.Reciever="teacher@gmail.com"
  }

  

}
