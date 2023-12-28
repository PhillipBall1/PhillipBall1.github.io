import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PlantsService } from '../service/plants.service';
import { Plant } from '../models/plants.model';

@Component({
  selector: 'app-home-featured-display',
  templateUrl: './home-featured-display.component.html',
  styleUrls: ['./home-featured-display.component.css']
})
export class HomeFeaturedDisplayComponent {

  currentIndex = 3;
  featuredPlants: Plant[] = [];

  constructor(private router: Router, private service: PlantsService){}

  ngOnInit() {
    this.service.getFeaturedPlants((plants: Plant[]) => {
      this.featuredPlants = plants;
    });
  }

  onSelectPlant(index: number){
    const selectedPlant = this.featuredPlants[index];
    if(selectedPlant === this.featuredPlants[this.currentIndex]){
      this.router.navigate(['display-plant'], { queryParams: { plant: JSON.stringify(selectedPlant) } });
    }
    this.currentIndex = index;
  }

  getTransform() {
    const cardWidthPx = 25 * 16;
    const viewportWidth = window.innerWidth;

    const mobileBreakpoint = 768;

    if (viewportWidth <= mobileBreakpoint) {
      let translation = this.currentIndex * -cardWidthPx;
      return `translateX(${translation}px)`;
    } else {
      let translation = (this.currentIndex - 0.75) * -cardWidthPx;
      return `translateX(${translation}px)`;
    }
  }

  buttonRight(){
    if(this.featuredPlants.length == this.currentIndex) return;
    this.onSelectPlant(this.currentIndex + 1);
  }
  buttonLeft(){
    if(this.currentIndex == 0) return;
    this.onSelectPlant(this.currentIndex - 1);
  }
}
