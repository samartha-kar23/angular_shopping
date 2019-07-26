import { Inject, Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()

export class StaticDataSource{
    private products: Product[]=[
        new Product(1,"Product 1", "1","product 1(Category1)",123),
        new Product(2,"Product 2", "1","product 2(Category1)",123),
        new Product(3,"Product 3", "1","product 3(Category1)",123),
        new Product(4,"Product 4", "1","product 4(Category1)",123),
        new Product(5,"Product 5", "1","product 5(Category1)",123),
        new Product(6,"Product 6", "2","product 6(Category2)",123),
        new Product(7,"Product 7", "2","product 7(Category2)",123),
        new Product(8,"Product 8", "2","product 8(Category2)",123),
        new Product(9,"Product 9", "2","product 9(Category2)",123),
        new Product(10,"Product 10", "2","product 10(Category2)",123),
        new Product(11,"Product 11", "3","product 11(Category3)",123),
        new Product(12,"Product 12", "3","product 12(Category3)",123),
        new Product(13,"Product 13", "3","product 13(Category3)",123),
        new Product(14,"Product 14", "3","product 14(Category3)",123),
        new Product(15,"Product 15", "3","product 15(Category3)",123),
    ];

    getProducts():Observable<Product[]>{
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}