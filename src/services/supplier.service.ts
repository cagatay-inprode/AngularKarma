import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http:HttpClient) {
   }
   Getsuppliers(){
     return this.http.get('https://northwind.now.sh/api/suppliers');
   }
}
