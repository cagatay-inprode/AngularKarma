import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css']
})
export class CategorydetailComponent implements OnInit {

  search:number;

  constructor(private _categoryservice : CategoryService) { }

  ngOnInit(): void {
  }

  Detay(){
  this._categoryservice.GetCategoryByID(this.search).subscribe((veri:any) =>{
    console.log(veri);
  });

  }

}
