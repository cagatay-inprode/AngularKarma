import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  category:Category = new Category();
  constructor(private _categoryservice:CategoryService) {
   }

  ngOnInit(): void {
  }

  Add(){
    
    this._categoryservice.PostCategory(this.category).subscribe((veri:any) =>{
      console.log(`success!`)
    })
  }

}
