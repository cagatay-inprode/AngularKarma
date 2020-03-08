import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/models/category';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {

   }

   GetCategories(){
     return this.http.get("https://northwind.now.sh/api/categories");
   }

   GetCategoryByID(id:number){
    return this.http.get("https://northwind.now.sh/api/categories/" + id)
   }

   PostCategory(category:Category){
     return this.http.post(environment.apiurl + 'categories/',category);
   }
}
