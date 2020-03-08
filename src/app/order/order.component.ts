import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders:[]=[];
  constructor(private _orderservice:OrderService) { 
    this._orderservice.GetOrders().subscribe((veri:any)=>{
      this.orders = veri;
    })
  }

  ngOnInit(): void {
  }

  GetCity(id:number){
    this._orderservice.GetOrderByID(id).subscribe((data:any)=>{
      console.log(data.shipAddress.city)
    });
  }



}
