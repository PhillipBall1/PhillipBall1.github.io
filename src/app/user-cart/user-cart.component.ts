import { Component, OnInit } from '@angular/core';
import { UserService } from '../core-service/user.service';
import { CartItem } from '../core-models/cart-item.model';
import { AuthService } from '../core-service/auth.service';

interface CartSummaryItem {
  plantId: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  cartSummary: CartSummaryItem[] = []; // Array to store a summary of the cart items.
  cartTotal: number = 0; // Total price of all items in the cart.

  /**
   * Initializes the component with UserService and AuthService.
   * @param userService - Service for handling user-related operations.
   * @param auth - Service for handling authentication.
   */
  constructor(private userService: UserService, private auth: AuthService) {}

  /**
   * OnInit lifecycle hook to load the cart items.
   */
  ngOnInit() {
    this.loadCartItems();
  }

  /**
   * Loads the cart items for the current user.
   */
  loadCartItems() {
    const userId = this.auth.getCurrentUser().userId;
    this.userService.getCartItems(userId).subscribe((cartItems: CartItem[]) => {
      this.aggregateCartItems(cartItems);
    });
  }

  /**
   * Aggregates cart items into a summary format.
   * Merges duplicate items and calculates their total quantities.
   * @param cartItems - The array of cart items to aggregate.
   */
  aggregateCartItems(cartItems: CartItem[]) {
    const summary = new Map<string, CartSummaryItem>();

    cartItems.forEach(item => {
      const key = item.plantId;
      if (summary.has(key)) {
        summary.get(key)!.quantity += item.quantity;
      } else {
        summary.set(key, { ...item });
      }
    });

    this.cartSummary = Array.from(summary.values());
    this.calculateCartTotal();
  }

  /**
   * Calculates the total price of all items in the cart.
   */
  calculateCartTotal() {
    this.cartTotal = this.cartSummary.reduce((total, item) => {
      return Math.round((total + (item.price * item.quantity)) * 100) / 100;
    }, 0);
  }

  /**
   * Removes an item from the cart.
   * @param plantId - The unique identifier of the plant to remove from the cart.
   */
  removeItemFromCart(plantId: string) {
    const userId = this.auth.getCurrentUser().userId;
    this.userService.removeFromCart(userId, plantId).subscribe({
        next: () => {
            this.cartSummary = this.cartSummary.filter(item => item.plantId !== plantId);
            this.calculateCartTotal();
            alert('Item removed from cart');
        },
        error: error => {
            console.error('Error removing item from cart', error);
            alert('Error removing item from cart');
        }
    });
  }

}
