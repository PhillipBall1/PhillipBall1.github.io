import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from '../models/plants.model';
import { PlantsService } from '../service/plants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  currentIndex = 2;
  featuredPlants: Plant[] = [];
  selectedPlant: Plant | null = null;

  constructor(private router: Router, private service: PlantsService)
  {
  }

  ngOnInit() {
    this.service.getFeaturedPlants((plants: Plant[]) => {
      this.featuredPlants = plants;
    });
  }

  onSelectPlant(selectedPlant: Plant){
    this.selectedPlant = selectedPlant;
    console.log("User selected" + selectedPlant.plant_name);
    this.router.navigate(['display-plant'], { queryParams: { plant: JSON.stringify(selectedPlant) } });
  }

  public displayPlants(){
    this.router.navigate(["plants"]);
  }

  moveLeft() {
    const lastPlant = this.featuredPlants.pop();
    this.featuredPlants.unshift(lastPlant!);

  }

  moveRight() {
    const firstPlant = this.featuredPlants.shift();
    this.featuredPlants.push(firstPlant!);
  }
}
