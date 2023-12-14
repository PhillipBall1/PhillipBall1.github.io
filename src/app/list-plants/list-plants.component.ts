import { Component, OnInit, Input } from '@angular/core';

import { PlantsService } from '../service/plants.service';

import { Plant } from '../models/plants.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-plants',
  templateUrl: './list-plants.component.html',
  styleUrls: ['./list-plants.component.css']
})
export class ListPlantsComponent implements OnInit{

  plants: Plant[] = [];
  selectedPlant: Plant | null = null;

	constructor(private route: ActivatedRoute, private service: PlantsService,private router: Router) { }

	ngOnInit() {
    console.log("Getting data....");
		this.service.getPlants((plants: Plant[]) => {
      this.plants = plants;
      console.log(plants);
    });
	}

  onSelectPlant(selectedPlant: Plant){
    this.selectedPlant = selectedPlant;
    console.log("User selected" + selectedPlant);
  }
}
