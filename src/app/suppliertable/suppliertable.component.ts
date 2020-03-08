import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/services/supplier.service';

@Component({
  selector: 'app-suppliertable',
  templateUrl: './suppliertable.component.html',
  styleUrls: ['./suppliertable.component.css']
})
export class SuppliertableComponent implements OnInit {

  suppliers:[]=[];
  constructor(private _supplierservice:SupplierService) { 
    this._supplierservice.Getsuppliers().subscribe((data:any)=>{
      this.suppliers = data; 
    })
  }

  ngOnInit(): void {
  }

}
