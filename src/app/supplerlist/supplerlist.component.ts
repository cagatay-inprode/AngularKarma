import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/services/supplier.service';

@Component({
  selector: 'app-supplerlist',
  templateUrl: './supplerlist.component.html',
  styleUrls: ['./supplerlist.component.css']
})
export class SupplerlistComponent implements OnInit {

  suppliers:[];

  constructor(private _supplierservice: SupplierService) {
    this._supplierservice.Getsuppliers().subscribe((veri: any) => {
      this.suppliers= veri;
    })
  }

  ngOnInit(): void {
  }

}
