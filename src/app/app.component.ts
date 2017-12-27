import { ProductService } from './product.service';
import { Product } from './product';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  product = [
    new Product(1, 'DSLR Camera', 1499.99, '../../assets/camera.jpg'),
    new Product(2, 'iLaptop', 1299.99, '../../assets/laptop.jpg')
  ];

  constructor(private _productService: ProductService) {
    this._productService.updateProducts(this.product);
    this._productService.productsObservable.subscribe( (products) => {
      this.product = products;
    });
  }

}