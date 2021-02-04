import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { interval } from 'rxjs';
import { textSpanIntersectsWithPosition } from 'typescript';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  activeChat=1;
  message;
  chats
  chatMessages;
  currentChat=null
  myId=null
  teachers;
  interval;
  httpOptions;
  alert=null;
  constructor(private service:MainService) { }
  

  ngOnInit(): void {
    this.service.http.get(this.service.path+"user/me",this.service.httpOptions).subscribe(res=>
      {

      })

      var headers_object = new HttpHeaders({
        // 'Content-Type': 'application/json',
         'Authorization': "Token "+localStorage.getItem("token")
      });

      this.httpOptions = {
        headers: headers_object
      };
  
      console.log("Token: "+localStorage.getItem("token"));
    this.teachers = new Object()
    this.chats=[]
    this.getChats()
    this.getMessages()
    this.interval = interval(5000).subscribe(()=>this.getMessages())
    this.message=new Object()
    this.message.Text=''
    this.chatMessages=new Object()
    this.chatMessages=null
    
     
    
    // this.message.reciever="teacher@gmail.com"
    
    // this.service.http.get(this.service.path+"classroom/teachers",this.service.httpOptions).subscribe(res=>
    //   {
    //     this.teachers=res
        

    //     this.teachers.forEach(element => {
          
    //       if(element.id==this.activeChat)
    //       {
    //         // localStorage.setItem("currentChatEmail",element.email)
    //         this.message.reciever=element.email
    //         console.log(
    //         this.message.Reviever);
            
    //       }
          
    //     });
    //   })
      // this.message.reciever="teacher@gmail.com"
      // this.activeChat=2
  }

  sendMessage()
  {
    console.log("activeChat: ",this.activeChat);
    this.message.reciever=this.activeChat
    
      this.service.http.post(this.service.path+"messages/my_messages/",this.message,this.httpOptions).subscribe(res=>
        {
          this.message.reciever=this.activeChat
            this.getMessages()
        },
        err=>
      {
        
        this.alert="خطا در ارسال پیام"
      })
  }

  getMessages()
  {
    this.service.http.get(this.service.path+"messages/my_messages/?user="+this.activeChat,this.httpOptions).subscribe(res=>
      {
          
          this.chatMessages=res;
          
      })
  }

  getChats()
  {
    
    
    this.service.http.get(this.service.path+"messages/my_chats",this.httpOptions).subscribe(res=>
      {
        this.chats=res["interactors"]
        this.activeChat=this.chats[0]
        if (localStorage.getItem("currentChatId")!=null && localStorage.getItem("currentChatId")!=undefined)
        {
          this.chats.push(localStorage.getItem("currentChatId"))
          this.activeChat=parseInt(localStorage.getItem("currentChatId"))
          this.message.reciever=parseInt(localStorage.getItem("currentChatId"))
        }
        

      })
  }

  changeChat(item)
  {
    this.activeChat = item
    this.getMessages()
    this.message.reciever=item
  }


  ngOnDestroy()
  {
    this.interval.unsubscribe()
  }



  

}
