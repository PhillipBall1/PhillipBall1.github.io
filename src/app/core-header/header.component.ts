import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../core-service/auth.service';
import { UserService } from '../core-service/user.service';
import { User } from '../core-models/users.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  // Used to check if the current route should make the navbar background opaque
  hideNavBG = false;

  // Used to check if the current user is an admin
  admin = false;

  // Used to check if there is an active user
  loggedIn = false;

  /**
   * Constructor: Injects the necessary services for navigation and user authentication.
   * Subscribes to route changes to adjust UI elements.
   * Checks for user authentication to update the loggedIn status.
   * @param router - The Angular Router for navigation
   * @param auth - The AuthService for authentication checks
   * @param userService - The UserService for user-related API calls
   */
  constructor(private router: Router, private auth: AuthService, private userService: UserService) {
    // Subscribe to router events for navigation changes
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routeCheck();
      }
    });
    // Check authentication status
    this.loggedIn = this.auth.isAuthenticated();
    if(this.loggedIn) this.checkAdmin();
  }

  /**
   * Compares route URLs to see if the navbar background should be opaque or not
   */
  routeCheck() {
    this.hideNavBG = this.router.url == '/' || this.router.url == '/login';
  }

  /**
   * Initialized when the logout navbar link is pressed
   *
   * This method removes the user token from the local storage.
   * Removes the true boolean from being logged in or admin.
   * Navigates to the login route.
   */
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this.admin = false;
    this.router.navigate(['/login']);
  }

  /**
   * Initializes every time with ngOnInit.
   *
   * This method gets the current user from the auth service.
   * If a user exists we use the user service to make an API request
   * to get their details.
   * Using their details we check if they are an admin or not.
   * Logs an error incase we can't get the users details
   */
  checkAdmin() {
    var user = this.auth.getCurrentUser();
    if (user) {
      this.userService.getUserDetails(user.userId).subscribe({
        next: (user) => {
          this.admin = user.admin;
          console.log("User details:", user);
        },
        error: (error) => {
          console.error("Error fetching user details:", error);
        }
      });
    }
  }

}
