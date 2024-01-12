import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../core-service/plants.service';
import { Plant } from '../core-models/plants.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredPlants!: Plant[];
  featuredHeader: String = "Plants that Stand Out";
  featuredPhrase: String = "Top-tier selection of our most beloved plants";

  indoorPlants!: Plant[];
  indoorHeader: String = "Bring the Outdoors In";
  indoorPhrase: String = "Discover the beauty of nature with our handpicked indoor plant collection";

  ediblePlants!: Plant[];
  edibleHeader: String = "Safe for Everyone";
  ediblePhrase: String = "This collection of plants are edible incase of a hungry pet";

  /**
   * Constructs the HomeComponent and injects the PlantsService.
   * @param service - The PlantsService for fetching plant data.
   */
  constructor(private service: PlantsService){}

  /**
   * OnInit lifecycle hook that initializes the component.
   * Fetches featured plants and, upon successful retrieval, proceeds to load indoor and edible plants.
   */
  ngOnInit(){
    this.loadFeaturedPlants();
  }

  /**
   * Fetches featured plants from the PlantsService.
   * Sets up the sequence to load indoor and edible plants upon successful retrieval.
   */
  private loadFeaturedPlants() {
    this.service.getFeaturedPlants().subscribe({
      next: (featuredPlants: Plant[]) => {
        this.featuredPlants = featuredPlants;
        this.loadIndoorPlants();
      },
      error: (error) => console.error('Error fetching featured plants:', error),
      complete: () => console.log('Featured plants fetch completed')
    });
  }

  /**
   * Fetches indoor plants from the PlantsService.
   * Calls to load edible plants upon successful retrieval.
   */
  private loadIndoorPlants() {
    this.service.getIndoorPlants().subscribe({
      next: (indoorPlants: Plant[]) => {
        this.indoorPlants = indoorPlants;
        this.loadEdiblePlants();
      },
      error: (error) => {
        console.error('Error fetching indoor plants:', error);
      },
      complete: () => {
        console.log('Indoor plants fetch completed');
      }
    });
  }

  /**
   * Fetches edible plants from the PlantsService.
   * This is the final step in the plant data loading sequence.
   */
  private loadEdiblePlants() {
    this.service.getEdiblePlants().subscribe({
      next: (ediblePlants: Plant[]) => {
        this.ediblePlants = ediblePlants;
      },
      error: (error) => {
        console.error('Error fetching edible plants:', error);
      },
      complete: () => {
        console.log('Edible plants fetch completed');
      }
    });
  }
}
