import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(
    private repository: ProductRepository,
    private cart: Cart
  ) {}

  ngOnInit() {
  }

  get products(): Product[] {
    let startIndex = (this.selectedPage-1)*this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
    .slice(startIndex, startIndex+this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }
//page number array
  get pageNumbers(): number[]{
    return Array(Math.ceil(this.repository
    .getProducts(this.selectedCategory).length / this.productsPerPage))
    .fill(0).map((x,i)=> i+1);
  }

//event Handlers
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePage(newPage: number){
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number){
    this.productsPerPage = Number(newSize);
  }

// Cart events
  addProductToCart(product: Product){
    this.cart.addLine(product);
  }

}
