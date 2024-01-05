import { Component, Input, OnInit } from '@angular/core';
import { Plant } from '../models/plants.model';
import { PlantsService } from '../service/plants.service';
import { ModifyPlantsComponent } from '../modify-plants/modify-plants.component';

@Component({
  selector: 'app-create-plant',
  templateUrl: './create-plant.component.html',
  styleUrls: ['./create-plant.component.css']
})
export class CreatePlantComponent implements OnInit {

  @Input() plant = new Plant();

  createdPlant!: Plant;

  ngOnInit(): void {
    if (!this.plant) {
      this.plant = new Plant();
    }
  }

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

  constructor(private service: PlantsService, private modify: ModifyPlantsComponent){}

  get isUpdateMode(): boolean {
    return !!this.plant!._id;
  }

  onSubmit(){
    this.service.createPlant(this.plant!, () => console.log("Created " + this.plant!.plant_name));
    this.modify.plants.push(this.plant);
    alert(this.plant!.plant_name + " was successfully created");
    this.clearInputs();
  }

  public clearInputs(){
    this.plant = new Plant();
    this.modify.plantToUpdate = new Plant();
  }
}
