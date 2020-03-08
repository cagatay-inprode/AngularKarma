import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/models/supplier';
import { SupplierService } from 'src/services/supplier.service';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent implements OnInit {

  supplier:Supplier = new Supplier();

  constructor(private _supplierservice:SupplierService) { }

  ngOnInit(): void {
  }

  Add(){
    this._supplierservice.AddSupplier(this.supplier).subscribe((data:any) =>{
      alert('Kayit basarili!!')
    })
  }

}
