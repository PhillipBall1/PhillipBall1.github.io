import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-image-grid',
  templateUrl: './home-image-grid.component.html',
  styleUrls: ['./home-image-grid.component.css']
})
export class HomeImageGridComponent {

  /**
   * @param router - Angular component to navigate
   */
  constructor(private router: Router){}

  /**
   * The Shop button on the homepage references this call to the navigation
   */
  public displayPlants(){
    this.router.navigate(["plants"]);
  }
}
