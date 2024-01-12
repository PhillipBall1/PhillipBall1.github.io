import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../core-models/users.model';
import { CartItem } from '../core-models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Flag to toggle between development and production API endpoints
  testing = false;
  private host = this.testing ? "http://localhost:3000/API" : "https://phillip-full-stack-4cf7dd0dd91b.herokuapp.com/API";

  constructor(private http: HttpClient) {}

  /**
   * Authenticate a user with a username and password.
   * @param username The user's username.
   * @param password The user's password.
   * @returns An Observable of the authentication response.
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.host}/login`, { username, password });
  }

  /**
   * Create a new user in the database.
   * @param userData The new user's data including username, password, and admin status.
   * @returns An Observable of the user creation response.
   */
  createUser(userData: { username: string, password: string, admin: boolean }): Observable<any> {
    return this.http.post<any>(`${this.host}/register`, userData);
  }

  /**
   * Retrieve details of a specific user.
   * @param userId The unique identifier of the user.
   * @returns An Observable of User data.
   */
  getUserDetails(userId: string): Observable<User> {
    return this.http.get<User>(`${this.host}/user/${userId}`);
  }

  /**
   * Add an item to a user's cart.
   * @param userId The user's unique identifier.
   * @param cartItem The item to add to the cart.
   * @returns An Observable of the update response.
   */
  addToCart(userId: string, cartItem: CartItem): Observable<any> {
    return this.http.put<any>(`${this.host}/user/${userId}/cart`, cartItem);
  }

  /**
   * Retrieve all items from a user's cart.
   * @param userId The unique identifier of the user.
   * @returns An Observable of an array of CartItems.
   */
  getCartItems(userId: string): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.host}/user/${userId}/cart`);
  }

  /**
   * Remove an item from a user's cart.
   * @param userId The user's unique identifier.
   * @param plantId The unique identifier of the plant to be removed from the cart.
   * @returns An Observable of the deletion response.
   */
  removeFromCart(userId: string, plantId: string): Observable<any> {
    return this.http.delete<any>(`${this.host}/user/${userId}/cart/${plantId}`);
  }
}
