import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { MainService } from '../main.service';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  
  selectedChoice=["1","1","1","1","1"]
  alert=null

  constructor(private http:HttpClient,private service:MainService) { }

  

  ngOnInit(): void {
  }

  choose(e,questionNumber)
  {
    console.log("*************************");
    
    this.selectedChoice[questionNumber] = e
    console.log(e)
    
  }

  sendQuestionnaireData()
  {
    var answers="";
    this.selectedChoice.forEach(element => {
      answers+=element
      
      
    });
    var headers_object = new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': "Token "+localStorage.getItem("token")
    });
    const httpOptions = {
      headers: headers_object,
      
    };
    var answer = new Object()
    answer["answer"] = answers

    this.http.put(this.service.path+"question/my_answer/",JSON.stringify(answer),httpOptions).subscribe(res=>
      {
        this.alert="با موفقیت ثبت شد"
      })
    console.log("answers: "+answers);
    
    
    
  }

}
