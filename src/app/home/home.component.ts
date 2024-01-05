import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../service/plants.service';
import { Plant } from '../models/plants.model';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service: PlantsService){}

  featuredPlants!: Plant[];
  featuredHeader: String = "Plants that Stand Out";
  featuredPhrase: String = "Top-tier selection of our most beloved plants";

  indoorPlants!: Plant[];
  indoorHeader: String = "Bring the Outdoors In";
  indoorPhrase: String = "Discover the beauty of nature with our handpicked indoor plant collection";

  ediblePlants!: Plant[];
  edibleHeader: String = "Safe for Everyone";
  ediblePhrase: String = "This collection of plants are edible to help with hungry pets";

  ngOnInit(){
    this.service.getFeaturedPlants((featuredPlants: Plant[]) => {
      this.featuredPlants = featuredPlants;
      this.loadIndoorPlants();
    });
  }
  private loadIndoorPlants() {
    this.service.getIndoorPlants((indoorPlants: Plant[]) => {
      this.indoorPlants = indoorPlants;
      this.loadEdiblePlants();
    });
  }

  private loadEdiblePlants() {
    this.service.getEdiblePlants((ediblePlants: Plant[]) => {
      this.ediblePlants = ediblePlants;
    });
  }
}
