import { Component, OnInit } from '@angular/core';

import { PlantsService } from '../service/plants.service';

import { Plant } from '../models/plants.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-plants',
  templateUrl: './list-plants.component.html',
  styleUrls: ['./list-plants.component.css']
})
export class ListPlantsComponent implements OnInit{

  plants: Plant[] = [];
  selectedPlant: Plant | null = null;

	constructor(private service: PlantsService, private router: Router) {}

	ngOnInit() {
		this.service.getPlants((plants: Plant[]) => {
      this.plants = plants;
      console.log(plants);
    });

	}

  onSelectPlant(selectedPlant: Plant){
    this.selectedPlant = selectedPlant;
    this.router.navigate(['display-plant'], { queryParams: { plant: JSON.stringify(selectedPlant) } });
  }
}
