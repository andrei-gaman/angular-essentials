import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() items: string[];
  @Output() buttonClickEvent = new EventEmitter<string>();
  item: string;

  constructor() {}

  ngOnInit(): void {}

  onUserInput(event) {
    this.item = event.target.value;
  }

  onClick() {
    this.buttonClickEvent.emit(this.item);
  }
}
