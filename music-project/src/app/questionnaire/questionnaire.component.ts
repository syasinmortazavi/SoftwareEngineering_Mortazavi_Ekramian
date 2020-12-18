import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  defaultChoice="guitar"
  selectedChoice="guitar"
  type=1

  constructor() { }

  

  ngOnInit(): void {
  }

  choose(e)
  {
    console.log("*************************");
    
    this.selectedChoice = e
    console.log(e)
    
  }

}
