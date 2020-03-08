import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  productname:string='';
  search:number;
  constructor(private _productservice : ProductService) { 

  }

  ngOnInit(): void {
  }

  GetbyID(){
    this._productservice.GetProductByID(this.search).subscribe((veri:any)=> {
      this.productname = veri.name;
    })
  }

}
