import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/shopping-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increaseQtd = new EventEmitter<CartItem>()
  @Output() descreaseQtd = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQtd(item: CartItem) {
    this.increaseQtd.emit(item)
  }
  emitDecreaseQtd(item: CartItem) {
    this.descreaseQtd.emit(item)
  }
  emitRemove(item: CartItem) {
    this.remove.emit(item)
  }

}
