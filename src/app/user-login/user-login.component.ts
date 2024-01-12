import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core-service/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  register = false; // Flag to indicate if the register option has been clicked.

  /**
   * Constructs the UserLoginComponent with necessary dependencies.
   * @param userService - Service for handling user authentication.
   * @param router - Router for navigation.
   * @param user - UserComponent for accessing user-related properties and methods.
   */
  constructor(private userService: UserService, private router: Router, private user: UserComponent) {}

  /**
   * Authenticates the user with the provided username and password.
   * On successful login, navigates to the home page.
   * On error, displays an appropriate error message.
   */
  login() {
    this.userService.login(this.username, this.password).subscribe({
      next: (data) => {
        localStorage.setItem('auth_token', data.token);
        console.log('Login successful', data);
        this.router.navigate(['']);
      },
      error: (error) => {
        this.errorMessage = error.error.error;
      }
    });
  }

  /**
   * Triggered when the 'Register' button is clicked.
   * Updates the state to indicate that the user wants to register.
   */
  registerClicked(){
    this.user.noAccount = true;
  }
}
