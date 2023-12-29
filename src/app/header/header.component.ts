import { Component } from '@angular/core';
import {NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  navigated = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
        if(val instanceof NavigationEnd){
          this.RouteCheck();
        }
    });
  }

  RouteCheck() {
    if(this.router.url === '/home'){
      this.navigated = false;
    }
    else{
      this.navigated = true;
    }
  }
}
