import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../core-service/auth.service';
import { UserService } from '../core-service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router, private auth: AuthService, private userService: UserService) {}

  /**
   * This method initializes to check for the current route URL through this.router.events
   * and see if there is an active user through this.auth.isAuthenticated() to find a token.
   */
  ngOnInit(): void{
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routeCheck();
        this.checkAdmin();
      }
    });

    // If there is a token, there is an active user, if not, then there is no active user.
    this.loggedIn = this.auth.isAuthenticated();
  }

  // Used to check if the current route should make the navbar background opaque
  hideNavBG = false;

  // Used to check if the current user is an admin
  admin = false;

  // Used to check if there is an active user
  loggedIn = false;

  /**
   * Compares route URLs to see if the navbar background should be opaque or not
   */
  routeCheck() {
    this.hideNavBG = this.router.url === '/' || this.router.url === '/login';
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

  checkAdmin() {
    const currentUser = this.auth.getCurrentUser();
    if (currentUser) {
      this.userService.getUserDetails(currentUser.userId).subscribe({
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
