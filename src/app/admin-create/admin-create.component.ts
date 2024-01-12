import { Component, Input } from '@angular/core';
import { Plant } from '../core-models/plants.model';
import { PlantsService } from '../core-service/plants.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent {

  constructor(private service: PlantsService, private admin: AdminComponent){}

  // Plant object passed from the AdminComponent for updating.
  // If no plant is passed, a new plant will be created.
  @Input() plant = new Plant();

  /**
   * If no plant is passed from the AdminComponent, a new plant instance is created for creation purposes.
   */
  ngOnInit(): void {
    if (!this.plant) {
      this.plant = new Plant();
    }
  }

  // Fields used to model a new plant for creation
  plantFields = [
    {label: 'Name', modelProp: 'plant_name', placeholder: 'Enter Plant Name'},
    {label: 'Family Name', modelProp: 'family_name', placeholder: 'Enter Family Name'},
    {label: 'Scientific Name', modelProp: 'scientific_name', placeholder: 'Enter Scientific Name'},
    {label: 'Description', modelProp: 'plant_description', placeholder: 'Enter Plant Description'},
    {label: 'Image', modelProp: 'image', placeholder: 'Enter Plant Image'},
    {label: 'Price', modelProp: 'price', placeholder: 'Enter Plant Price'},
    {label: 'Difficulty', modelProp: 'difficulty', placeholder: 'Enter Plant Difficulty 1-3'},
    {label: 'Featured', modelProp: 'featured', type: 'checkbox'},
    {label: 'Indoor', modelProp: 'indoor', type: 'checkbox'},
    {label: 'Edible', modelProp: 'edible', type: 'checkbox'}
  ];

  /**
   * Initializes when the submit button has been pressed.
   *
   * This method creates an option for which API action is being made based on the plant
   * that was given through admin.component.
   * Based on if there is an ID we are updating an existing plant and use updatePlantList
   * to get the index and change the plant at that index to the updatedPlant.
   * If there is no ID, we create a new one based on the information modeled.
   */
  onSubmit() {
    let operationObservable;

    // Check for ID
    if (this.plant._id) {
      operationObservable = this.service.updatePlant(this.plant);
    } else {
      operationObservable = this.service.createPlant(this.plant);
    }

    operationObservable.subscribe({
      next: (updatedOrCreatedPlant) => {
        const action = this.plant._id ? 'Updated' : 'Created';
        console.log(`${action} ${this.plant.plant_name}`);

        if (!this.plant._id) {
          alert(`${this.plant.plant_name} was successfully created`);
          this.admin.plants.push(updatedOrCreatedPlant);
        } else {
          this.updatePlantList(updatedOrCreatedPlant);
        }

        this.clearInputs();
      },
      error: (error) => {
        console.error(`Error during plant ${this.plant._id ? 'update' : 'creation'}:`, error);
      }
    });
  }

  /**
   * Initializes on the submit event if the plant was an Input from the admin.component.
   *
   * This method finds where the plant IDs match and changes the plant at that index to
   * the updated one.
   * @param updatedPlant
   */
  private updatePlantList(updatedPlant: Plant) {
    const index = this.admin.plants.findIndex(p => p._id === updatedPlant._id);
    if (index > -1) {
      this.admin.plants[index] = updatedPlant;
    }
  }

  /**
   * This method clears the variables when the admin clicks the 'Cancel' button.
   */
  public clearInputs(){
    this.plant = new Plant();
    this.admin.plantToUpdate = new Plant();
  }
}
