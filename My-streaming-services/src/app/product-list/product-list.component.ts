import { Component } from '@angular/core';
import { products } from './product.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  products = products;
 

signup(url: string) {
  window.open(url, '_blank');
}
Discount(url1: string) {
  window.open(url1, '_blank');
}
enable(name: string){
  let confirm;
  
  products.forEach(product => {
    if (product.name===name){
      product.isEnable=!product.isEnable;
      confirm=product.isEnable;
    }
  });

  if (confirm===true){
    window.alert('The service has been Enabled');
  }
else if (confirm===false){
  window.alert('The service has been Disabled');
}
}
  constructor() { }

  ngOnInit() {
  }

}