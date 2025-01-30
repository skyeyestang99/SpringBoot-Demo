import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/ProductService.service';
import { Product } from '../../model/product';
import { CartService } from '../../service/ShoppingCartService.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  newName = '';
  newPrice = 0;

  constructor(private productService: ProductService,
    private cartService: CartService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error in products:', err);
      }
    });
  }

  createProduct(): void {
    if (!this.newName || !this.newPrice) return;
    const product: Product = {
      name: this.newName,
      price: this.newPrice
    };

    this.productService.createProduct(product).subscribe({
      next: (created) => {
        console.log('Product created:', created);
        this.newName = '';
        this.newPrice = 0;
        this.loadProducts();
      },
      error: (err) => {
        console.error('Error creating product:', err);
      }
    });
  }

  deleteProduct(id?: number): void {
    if (!id) return;
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        console.log('Product deleted');
        this.loadProducts();
      },
      error: (err) => {
        console.error('Error deleting product:', err);
      }
    });
  }

  addToCart(productId: number) {
    const userIdString = prompt('Please enter the UserId:');

    if (!userIdString) {
      return;
    }

    const userId = Number(userIdString);
    const quantity = 1;

    if (Number.isNaN(userId) || userId <= 0) {
      alert('Invalid userId!');
      return;
    }
    this.cartService.createOrder(userId, productId, quantity).subscribe({
      next: (createdOrder) => {
        alert(`Created order with ID: ${createdOrder.id}`);
      },
      error: (err) => {
        console.error('Error creating order:', err);
        alert('Failed to create order');
      }
    });
  }
}
