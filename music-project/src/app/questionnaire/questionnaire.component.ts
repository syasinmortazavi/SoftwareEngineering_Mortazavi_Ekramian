import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  
  selectedChoice=["1","1","1","1","1","1"]
  type=2

  constructor() { }

  

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
    
    
  }

}
