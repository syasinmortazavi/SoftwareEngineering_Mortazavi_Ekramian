import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selectedCategory=[]
  searchType=1
  searchTerm=''
  searchTermForTeacher=''
  category=[{id:1,name:"گیتار"},{id:2,name:"سنتور"},{id:3,name:"فلوت"}]
  constructor() { }

  ngOnInit(): void {
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

}
