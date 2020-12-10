import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  activeChat=1
  message;

  chatMessages;
  constructor(private service:MainService) { }
  

  ngOnInit(): void {
    
    this.getMessages()
    interval(10000).subscribe(()=>this.getMessages())
    this.message=new Object()
    this.message.Text=''
    this.chatMessages=new Object()
    this.chatMessages=null
    this.message.Reciever="teacher@gmail.com"
  }

  sendMessage()
  {
      this.service.http.post(this.service.path+"messages/my_messages/",this.message,this.service.httpOptions).subscribe(res=>
        {
            this.getMessages()
        })
  }

  getMessages()
  {
    this.service.http.get(this.service.path+"messages/my_messages/?user=2",this.service.httpOptions).subscribe(res=>
      {
          this.chatMessages=res;
          
      })
  }



  

}
