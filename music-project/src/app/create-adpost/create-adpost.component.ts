import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-adpost',
  templateUrl: './create-adpost.component.html',
  styleUrls: ['./create-adpost.component.css']
})
export class CreateAdpostComponent implements OnInit {
  adPost;
  selectedFile:File=null
  constructor() { }

  ngOnInit(): void {
    this.adPost=new Object()
  }

  sendAdPost()
  {
    console.log("adPost: "+ JSON.stringify(this.adPost));
    
  }
  fileChangeEvent(e)
  {

    this.adPost.picture=e.target.files[0]
    this.selectedFile=e.target.files[0]
    
    
    console.log(e.target.files[0])
  }

}
