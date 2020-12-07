import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  path="https://localhost:44342/"
  selectedCategory=[]
  result;
  searchType=1
  searchTerm=''
  searchFilters;
  searchTermForTeacher=''
  searchResultAdPosts;
  category=[{id:1,name:"گیتار"},{id:2,name:"سنتور"},{id:3,name:"فلوت"}]
  constructor(private http:HttpClient,protected router:Router) { }

  ngOnInit(): void {
    this.searchFilters=new Object()
    this.searchResultAdPosts = new Object()
    this.searchResultAdPosts = null
    this.result = new Object()
    this.result=null;
  }

  changeSearchTypeToCategory()
  {
    
    if(this.searchType==2)
    {
      this.searchType=1
      
    }
    
   
    
    
  }
  changeSearchTypeToTeacher()
  {
    if(this.searchType==1)
    {
      this.searchType=2
      this.selectedCategory=[]
      
    }
  }

  getDataBySearchTermForAdPosts()
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
   
    
    
    this.searchFilters.searchTerm=this.searchTerm
    this.searchFilters.types=this.selectedCategory
    this.http.get(this.path+"AdPost/getAdPostsBySearchTerm?searchFilters="+encodeURIComponent(JSON.stringify(this.searchFilters))).subscribe(res=>
      {
        this.searchResultAdPosts=res
      })
  }

  AdPostClick(Id)
{
  localStorage.setItem("AdPostTeacherId",Id)
  this.router.navigateByUrl("teacher")
}

}
