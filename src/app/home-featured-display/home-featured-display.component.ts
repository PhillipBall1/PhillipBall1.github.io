import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlantsService } from '../service/plants.service';
import { Plant } from '../models/plants.model';

@Component({
  selector: 'app-home-featured-display',
  templateUrl: './home-featured-display.component.html',
  styleUrls: ['./home-featured-display.component.css']
})
export class HomeFeaturedDisplayComponent {
  @ViewChild('rightButton') rightButton!: ElementRef<SVGElement>;
  @ViewChild('leftButton') leftButton!: ElementRef<SVGElement>;
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
    const viewportWidth = window.innerWidth;
    const mobileBreakpoint = 768;
    let translation = 0;

    if (viewportWidth <= mobileBreakpoint) translation = (this.currentIndex - 1) * -(20 * 16);
    else translation = (this.currentIndex - 0.75) * -(25 * 16);

    return `translateX(${translation}px)`;
  }

  buttonRight(){
    const index = this.currentIndex + 1;
    const leftButton = this.leftButton.nativeElement;
    const rightButton = this.rightButton.nativeElement;

    leftButton.style.opacity = "1";

    if(this.featuredPlants.length != index) this.onSelectPlant(index);

    if(this.featuredPlants.length == index + 1) rightButton.style.opacity = "0";
  }
  buttonLeft(){
    const index = this.currentIndex - 1;
    const leftButton = this.leftButton.nativeElement;
    const rightButton = this.rightButton.nativeElement;

    rightButton.style.opacity = "1";

    if(this.currentIndex >= 1) this.onSelectPlant(index);

    if(this.currentIndex == 0) leftButton.style.opacity = "0";

  }
}
