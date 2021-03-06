import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ImageComponent } from './image/image.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { SupplerlistComponent } from './supplerlist/supplerlist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { OrderComponent } from './order/order.component';
import { SuppliertableComponent } from './suppliertable/suppliertable.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProjectComponent,
    AboutComponent,
    ContactComponent,
    ImageComponent,
    ContainerComponent,
    FooterComponent,
    CategorylistComponent,
    SupplerlistComponent,
    ProductlistComponent,
    ProductdetailComponent,
    CategorydetailComponent,
    OrderComponent,
    SuppliertableComponent,
    AddcategoryComponent,
    AddsupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
