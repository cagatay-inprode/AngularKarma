import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {

   }

   GetCategories(){
     return this.http.get("https://northwind.now.sh/api/categories");
   }

}
