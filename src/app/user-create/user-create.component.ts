import { Component } from '@angular/core';
import { UserService } from '../core-service/user.service';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  passwordStrength: string = '';

  /**
   * Constructs the UserCreateComponent with necessary dependencies.
   * @param userService - Service for handling user-related operations.
   * @param router - Router for navigation.
   * @param user - UserComponent for accessing user-related properties and methods.
   */
  constructor(private userService: UserService, private router: Router, private user: UserComponent) {}

  /**
   * Creates a new user account with the provided username and password.
   * Validates password strength and matching confirmation before proceeding.
   */
  createUser() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Passwords do not match";
      return;
    }

    if (!this.isPasswordStrong(this.password)) {
      this.errorMessage = "Password is not strong enough";
      return;
    }

    this.userService.createUser({ username: this.username, password: this.password, admin: false }).subscribe({
      next: (response) => {
        console.log('User created successfully', response);
        this.router.navigate(['/login']);
        this.user.noAccount = false;
      },
      error: (error) => {
        this.errorMessage = error.error.error;
      }
    });
  }

  /**
   * Redirects to the login page if the user already has an account.
   */
  hasAccount(){
    this.user.noAccount = false;
  }

  /**
   * Updates the password strength whenever the password input changes.
   */
  onPasswordChange() {
    this.passwordStrength = this.getPasswordStrength(this.password);
  }

  /**
   * Checks if the provided password meets strength requirements.
   * @param password - The password to check.
   * @returns A boolean indicating if the password is strong.
   */
  private isPasswordStrong(password: string): boolean {
    return /\d/.test(password) && /[A-Z]/.test(password) && /[^A-Za-z0-9]/.test(password) && password.length >= 8;
  }

  /**
   * Determines the strength of the provided password.
   * @param password - The password to evaluate.
   * @returns A string representing the strength of the password.
   */
  private getPasswordStrength(password: string): string {
    const length = password.length;
    if (length > 8 && /\d/.test(password) && /[A-Z]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
      return 'Strong';
    } else if (length > 5) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  }
}
