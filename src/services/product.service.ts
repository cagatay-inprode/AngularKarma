import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  GetProducts(){
    return this.http.get(`https://northwind.now.sh/api/products`);
  }

  GetProductByID(id:number){
    return this.http.get("https://northwind.now.sh/api/products/" + id)
  }
}
