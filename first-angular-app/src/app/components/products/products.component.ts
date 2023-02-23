import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsList: Array<string> = [];
  productName = 'Nike Air Force';
  isDisabled = false;

  // ! dokaz da vrednost nekog property-a ne mora biti fiksna (moze biti menjana)
  constructor() {
    setTimeout(() => {
      // this.productName = 'Addidas Running';
      this.isDisabled = true;
    }, 3000);
  }

  changeName(newName: string) {
    this.productName = newName;
  }

  onAddItem(form: NgForm) {
    // console.log(form);
    const name = form.value.product;
    this.productsList.push(name);
    // this.productsList.push(this.productName);
    // console.log(this.productsList);
  }

  onRemoveItem(title: any) {
    this.productsList = this.productsList.filter(name => name !== title);
  }

}
