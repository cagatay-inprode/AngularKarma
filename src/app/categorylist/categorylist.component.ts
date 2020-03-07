import { Component, OnInit } from '@angular/core';
import {CategoryService} from './../../services/category.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {


  constructor(private _categoryservice:CategoryService) { 
    this._categoryservice.GetCategories().subscribe((data: any) => {
  
    });
  }

  ngOnInit(): void {

  }

}
