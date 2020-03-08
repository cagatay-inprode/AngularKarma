import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from 'src/models/supplier';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http:HttpClient) {
   }
   Getsuppliers(){
     return this.http.get('https://northwind.now.sh/api/suppliers');
   }

   AddSupplier(supplier:Supplier){
     return this.http.post(environment.apiurl + 'suppliers/',supplier)
   }
}
