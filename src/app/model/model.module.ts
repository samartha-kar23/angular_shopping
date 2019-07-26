import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StaticDataSource,
    ProductRepository,
    Cart
  ]
})
export class ModelModule { }
