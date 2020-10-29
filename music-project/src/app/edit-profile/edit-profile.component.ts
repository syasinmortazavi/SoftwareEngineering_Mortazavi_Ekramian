import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user_=null;
  message=null
  ConfirmPassword
  constructor() { }

  ngOnInit(): void {
    this.user_=new Object()
  }

}
