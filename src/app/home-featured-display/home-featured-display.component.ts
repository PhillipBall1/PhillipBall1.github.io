import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from '../models/plants.model';

@Component({
  selector: 'app-home-featured-display',
  templateUrl: './home-featured-display.component.html',
  styleUrls: ['./home-featured-display.component.css']
})
export class HomeFeaturedDisplayComponent {
  @ViewChild('rightButton') rightButton!: ElementRef<SVGElement>;
  @ViewChild('leftButton') leftButton!: ElementRef<SVGElement>;

  currentIndex = 2;
  @Input() plantsArr: Plant[] = [];
  @Input() header: String = "";
  @Input() phrase: String = "";

  constructor(private router: Router){}

  onSelectPlant(index: number){
    const selectedPlant = this.plantsArr[index];
    if(selectedPlant === this.plantsArr[this.currentIndex]){
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

    if(this.plantsArr.length != index) this.onSelectPlant(index);

    if(this.plantsArr.length == index + 1) rightButton.style.opacity = "0";
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
