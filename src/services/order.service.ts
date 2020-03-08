import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { 
  }

  GetOrders(){
    return this.http.get(environment.apiurl + 'orders')
  }

  GetOrderByID(id:number){
    return this.http.get(environment.apiurl + 'orders/' + id);
  }
}
