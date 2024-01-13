import { Component, Input } from '@angular/core';
import { Plant } from '../core-models/plants.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-all-list',
  templateUrl: './shop-all-list.component.html',
  styleUrls: ['./shop-all-list.component.css']
})
export class ShopAllListComponent {

  // Input array to display the plants on the front-end
  @Input() plants!: Plant[];
  
  constructor(private router: Router){}

  /**
   * This method allows for the router to navigate to display-plant and
   * provide a plant in JSON format to then be used for the display through
   * queryParams.
   *
   * @param selectedPlant - Plant that user has selected
   */
  onSelectPlant(selectedPlant: Plant){
    this.router.navigate(['display'], { queryParams: { plant: JSON.stringify(selectedPlant) } });
  }
}
