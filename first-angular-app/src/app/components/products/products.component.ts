import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productName = 'Nike Air Force';
  isDisabled = true;

  // ! dokaz da vrednost nekog property-a ne mora biti fiksna (moze biti menjana)
  // constructor() {
  //   setTimeout(() => {
  //     this.productName = 'Addidas Running';
  //     this.isDisabled = false;
  //   }, 3000);
  // }

  changeName(newName: string) {
    this.productName = newName;
  }

}
