import { Component, OnInit } from '@angular/core';
import { Plant } from '../core-models/plants.model';
import { PlantsService } from '../core-service/plants.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  constructor(private service: PlantsService) {}

  /**
   * Used to send to the admin-create component with an ID to make sure that the
   * component recognizes we are updating and not creating when the admin selects a plant.
   */
  plantToUpdate = new Plant();

  // Used to populate the front-end with all of the plants in the database
  plants: Plant[] = [];

  /**
   * Initializes the component by loading plants data.
   *
   * This method calls the getPlants method of the service to retrieve an array of Plant objects.
   * Upon success, the plants array is populated with the retrieved data.
   * In case of an error, it logs the error to the console.
   */
  ngOnInit() {
    this.service.getPlants().subscribe({
      next: (plants: Plant[]) => {
        // Populates the plants array with data retrieved from the service.
        this.plants = plants;
      },
      // Logs any error encountered during the fetch operation.
      error: (error) => console.error('Error fetching plants:', error)
    });
  }

  /**
   * Initializes when the admin selects the 'Update' button.
   *
   * @param plant
   */
  onSelectPlant(plant: Plant): void {
    // Makes sure the admin does not have to scroll all the way back up after selection
    window.scrollTo(0, 0);
    // Setting the plantToUpdate with the respective plant information
    this.plantToUpdate = plant;
  }

  /**
   * Initializes when the admin selects the 'Delete' button on the respective plant.
   *
   * This method calls deletePlant of the service to remove a plant from the database.
   * On success, we remove the plant from the front-end by finding it's current index
   * and splicing from the array.
   * In the case of an error, it logs the error to the console and refreshes the array.
   * @param plant
   */
  onDeletePlant(plant: Plant) {

    // Asks admin for confirmation
    const isConfirmed = confirm(`Are you sure you want to delete ${plant.plant_name}?`);

    // If there is confirmation and the plant has an ID attached to it
    if (isConfirmed && plant._id) {
      this.service.deletePlant(plant._id).subscribe({
        next: () => {
          const index = this.plants.findIndex(p => p._id === plant._id);
          if (index > -1) {
            this.plants.splice(index, 1);
          }
          alert(`${plant.plant_name} was successfully deleted`);
        },
        error: (error) => {
          console.error('Error deleting plant:', error);
          this.refreshPlants();
        }
      });
    }
  }

  /**
   * This method repopulates the array in case of an error with deletion.
   */
  private refreshPlants() {
    this.service.getPlants().subscribe({
      next: (plants: Plant[]) => {
        this.plants = plants;
      },
      error: (error) => console.error('Error fetching plants:', error)
    });
  }
}
