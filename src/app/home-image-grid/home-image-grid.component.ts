import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-image-grid',
  templateUrl: './home-image-grid.component.html',
  styleUrls: ['./home-image-grid.component.css']
})
export class HomeImageGridComponent {
  constructor(private router: Router){

  }
  public displayPlants(){
    this.router.navigate(["plants"]);
  }
}
