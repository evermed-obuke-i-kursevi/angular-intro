import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() productName = ''; // Uz pomocu input dek. mozemo uhvatiti vrednost koja dolazi iz parent komponente
  @Output() productTitleClicked = new EventEmitter(); // uz pomocu ouput dek. mozemo emitovati vrednost (poslati vrednost) ka parent komponenti

  onNameClicked(param: string) {
    // console.log(param);
    this.productTitleClicked.emit(param);
  }

}
