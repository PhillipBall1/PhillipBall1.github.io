import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  navigated = false;
  admin = true;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.RouteCheck();
      }
    });
  }
  ngOnInit(){
    this.RouteCheck();
  }

  RouteCheck() {
    if(this.router.url != '/'){
      this.navigated = false;
    }
    else{
      this.navigated = true;
    }
  }
}
