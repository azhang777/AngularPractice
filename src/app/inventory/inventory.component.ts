import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';
import { JokeService } from '../joke.service';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent implements OnInit {
  joke?: any;
  quote?: any;
  constructor(
    private jokeService: JokeService,
    private quoteService: QuoteService
  ) {}

  //lifecycle hooks

  ngOnInit() {
    this.getTheJoke();
    this.getTheQuote();
  }

  //create the method with an observable

  getTheJoke() {
    this.jokeService.getJoke().subscribe((data) => {
      this.joke = data;
    });
  }

  getTheQuote() {
    this.quoteService.getQuote().subscribe((data) => {
      this.quote = data;
    });
  }

  inventory: Item[] = [
    {
      id: 1,
      name: 'burger',
      inStock: 5,
      price: 5.0,
      image: '/assets/images/burger.jpg',
      featured: true,
      qty: 0,
    },
    {
      id: 2,
      name: 'Fries',
      inStock: 15,
      price: 3.0,
      image: '/assets/images/fries.jpg',
      featured: true,
      qty: 0,
    },
    {
      id: 3,
      name: 'Soda',
      inStock: 20,
      price: 1.5,
      image: '/assets/images/soda.jpg',
      featured: true,
      qty: 0,
    },
    {
      id: 4,
      name: 'Samosa',
      inStock: 10,
      price: 3.0,
      image: '/assets/images/samosa.jpg',
      featured: true,
      qty: 0,
    },
  ];

  decreaseQty(inventory: any) {
    if (inventory.qty != 0 && inventory.qty > 0) {
      inventory.qty--;
    }
  }

  increaseQty(inventory: any) {
    if (inventory.qty < inventory.inStock) {
      inventory.qty++;
    }
  }

  onQtyChange(inventory: any) {
    if (inventory.qty < 0) {
      inventory.qty = 0;
    }
  }

  qtyCount() {
    let sum = 0;
    for (let x = 0; x < this.inventory.length; x++) {
      sum += this.inventory[x].qty;
    }

    return sum;
  }

  getSubtotal() {
    let sum = 0;
    for (let x = 0; x < this.inventory.length; x++) {
      sum += this.inventory[x].price * this.inventory[x].qty;
    }

    return sum;
  }

  getTotalAfterTax() {
    return this.getSubtotal() * 1.1;
  }
}
