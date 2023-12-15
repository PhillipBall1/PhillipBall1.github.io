import { Component, OnInit } from '@angular/core';

import { PlantsService } from '../service/plants.service';

import { Plant } from '../models/plants.model';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-list-plants',
  templateUrl: './list-plants.component.html',
  styleUrls: ['./list-plants.component.css']
})
export class ListPlantsComponent implements OnInit{

  plants: Plant[] = [];
  selectedPlant: Plant | null = null;

	constructor(private app: AppComponent, private service: PlantsService, private router: Router) { }

	ngOnInit() {
    this.app.navigated = true;
    console.log("Getting data....");
		this.service.getPlants((plants: Plant[]) => {
      this.plants = plants;
      console.log(plants);
    });
	}

  onSelectPlant(selectedPlant: Plant){
    this.app.navigated = false;
    this.selectedPlant = selectedPlant;
    console.log("User selected" + selectedPlant.plant_name);
    this.router.navigate(['display-plant'], { queryParams: { plant: JSON.stringify(selectedPlant) } });
  }
}
