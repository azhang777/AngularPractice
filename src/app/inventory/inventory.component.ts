import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{
  joke?: any;

  constructor(private jokeService: JokeService) {}
  
  //lifecycle hooks

  ngOnInit() {
    this.getTheJoke();
  }

  //create the method with an observable

  getTheJoke() {
    this.jokeService.getJoke().subscribe(
      (data) => {
       this.joke = data;
      }
    )
  }

  inventory:Item[] = [
    {
      "id":1,
      "name": "burger",
      "inStock": 5,
      "price": 4.99,
      "image": "/assets/images/burger.jpg",
      "featured": true,
      "qty": 0
    },
    {
      "id":2,
      "name": "Fries",
      "inStock": 15,
      "price": 0.50,
      "image": "/assets/images/fries.jpg",
      "featured": true,
      "qty": 0
    },
    {
      "id":3,
      "name": "Soda",
      "inStock": 20,
      "price": 1.99,
      "image": "https://picsum.photos/200/300",
      "featured": true,
      "qty": 0
    }
  ]

  decreaseQty(inventory : any) {
    if (inventory.qty != 0 && inventory.qty > 0) {
      inventory.qty--;
    }
  }

  increaseQty(inventory : any) {
      inventory.qty++;
  }

  stockCount(inventory : any) {
    for (let x = 0; x < inventory.length; x++) {
      return this.inventory[x].inStock
    }
    return 0;
  }

  qtyCount() {
    let sum = 0;
    for (let x = 0; x < this.inventory.length; x++) {
      sum+= this.inventory[x].qty;
    }

    return sum;
  }
  onQtyChange(inventory : any) {
    if (inventory.qty < 0) {
      inventory.qty = 0;
    }
  }
}
