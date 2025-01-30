import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/ShoppingCartService.service';
import { Order } from '../../model/order';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Order[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    console.log("reloading all cart items")
    this.cartService.getAllOrders().subscribe({
      next: (orders) => {
        this.cartItems = orders;
        this.calculateTotal();
      },
      error: (err) => {
        console.error('Error loading all orders:', err);
      }
    });
  }

  deleteOrder(orderId: number) {
    this.cartService.deleteOrder(orderId).subscribe({
      next: () => {
        this.loadCartItems();
      },
      error: (err) => {
        console.error('Error deleting order:', err);
      }
    });
  }

  private calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => {
      const price = item.product.price || 0;
      return sum + price * (item.quantity || 1);
    }, 0);
  }
}
