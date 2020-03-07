import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:[]
  constructor(private _productservice:ProductService) {
    this._productservice.GetProducts().subscribe((veri:any) => {
        this.products =veri;
    })
   }

  ngOnInit(): void {
  }

}
