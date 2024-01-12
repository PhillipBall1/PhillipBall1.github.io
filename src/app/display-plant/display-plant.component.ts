import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../core-models/plants.model';
import { CartItem } from '../core-models/cart-item.model';
import { UserService } from '../core-service/user.service';
import { AuthService } from '../core-service/auth.service';

@Component({
  selector: 'app-display-plant',
  templateUrl: './display-plant.component.html',
  styleUrls: ['./display-plant.component.css']
})
export class DisplayPlantComponent implements OnInit {

  plant!: Plant;
  amountToAdd:number = 1;
  overallPrice: number = 0;

  /**
   * Initializes the component with necessary dependencies.
   * @param route - ActivatedRoute to access route parameters.
   * @param router - Router for navigation.
   * @param userService - UserService for API calls related to user actions.
   * @param auth - AuthService for user authentication.
   */
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private auth: AuthService) {}

  /**
   * OnInit lifecycle hook that initializes the plant details.
   * Retrieves the plant data from the route query parameters and calculates the initial overall price.
   */
  ngOnInit() {
    this.plant = {} as Plant;
    this.route.queryParams.subscribe(params => {
      const plantString = params['plant'];
      if (plantString) {
        this.plant = JSON.parse(plantString);
      }
    });
    this.overallPrice = this.plant.price * this.amountToAdd;
  }

  /**
   * Adds the displayed plant to the user's cart.
   * Checks if the user is logged in and redirects to login if not.
   * Creates a cart item and sends it to the user service for addition to the cart.
   * @param plant - The plant to be added to the cart.
   * @param amountToAdd - The quantity of the plant to add.
   */
  addToCart(plant: Plant, amountToAdd: number) {
    if (!plant._id) return;

    const user = this.auth.getCurrentUser();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    const cartItem: CartItem = {
      plantId: plant._id,
      image: plant.image,
      name: plant.plant_name,
      quantity: amountToAdd,
      price: plant.price
    }

    this.userService.addToCart(user.userId, cartItem).subscribe({
      next: response => {
        console.log('Item added to cart', response);
        alert('Added to cart!');
      },
      error: error => {
        console.error('Error adding item to cart', error);
        alert('Error adding item to cart. Please try again.');
      }
    });
    this.router.navigate(['/shop']);
  }

  /**
   * Increases the quantity of the plant to be added to the cart.
   * Also recalculates the overall price based on the new quantity.
   */
  increaseQuantity() {
    this.amountToAdd++;
    this.overallPrice = Math.round(this.plant.price * this.amountToAdd * 100) / 100;
  }

  /**
   * Decreases the quantity of the plant to be added to the cart.
   * Also recalculates the overall price based on the new quantity.
   */
  decreaseQuantity() {
    if (this.amountToAdd > 1) {
      this.amountToAdd--;
    }
    this.overallPrice = Math.round(this.plant.price * this.amountToAdd * 100) / 100;
  }

}
