import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user;
  loader=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
         this.loader=true;
         this.user = new Object()
         console.log( localStorage.getItem("token"));
         
         var headers_object = new HttpHeaders({
          'Content-Type': 'application/json',
           'Authorization': "Token "+localStorage.getItem("token")
        });
        const httpOptions = {
          headers: headers_object
        };

        this.http.get("http://5.160.146.125/api/user/me/",httpOptions).subscribe(
          res=>
          {
            this.user=res;
            this.user=JSON.parse(this.user)
            console.log("editProfile: "+JSON.stringify(res));
            this.loader=false
            
          }
        )
  }

}
