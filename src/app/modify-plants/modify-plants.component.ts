import { Component } from '@angular/core';
import { Plant } from '../models/plants.model';
import { PlantsService } from '../service/plants.service';
import { Router } from '@angular/router';
import { ObjectId } from 'mongodb';

@Component({
  selector: 'app-modify-plants',
  templateUrl: './modify-plants.component.html',
  styleUrls: ['./modify-plants.component.css']
})
export class ModifyPlantsComponent {

  plantToUpdate = new Plant();
  plantToDelete!: Plant;
  plants: Plant[] = [];
	constructor(private service: PlantsService) {}

  plant!: Plant;

	ngOnInit() {
		this.service.getPlants((plants: Plant[]) => {
      this.plants = plants;
    });
	}
  onSelectPlant(plant: Plant): void {
    this.plantToUpdate = plant;
  }
  async onDeletePlant(plant: Plant){
    this.plantToDelete = plant;

    const isConfirmed = confirm("Are you sure you want to delete " + this.plantToDelete.plant_name + "?");

    if (isConfirmed && this.plantToDelete._id) {
      try {
        await this.service.deletePlant(this.plantToDelete._id, () => console.log("deleted " + this.plantToDelete.plant_name));
        const index = this.plants.findIndex(p => p._id === this.plantToDelete._id);
        if (index > -1) {
          this.plants.splice(index, 1);
        }
        alert(this.plantToDelete.plant_name + " was successfully deleted");
      } catch (error) {
        console.error('Error deleting plant:', error);
      }
    } else if (!this.plantToDelete._id) {
      console.error('Attempted to delete a plant with an undefined ID');
    }
  }


}
