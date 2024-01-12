import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from '../core-models/plants.model';

@Component({
  selector: 'app-home-featured-display',
  templateUrl: './home-featured-display.component.html',
  styleUrls: ['./home-featured-display.component.css']
})
export class HomeFeaturedDisplayComponent {
  @ViewChild('rightButton') rightButton!: ElementRef<SVGElement>;
  @ViewChild('leftButton') leftButton!: ElementRef<SVGElement>;

  currentIndex = 2; // Current index for the displayed plant.
  @Input() plantsArr: Plant[] = []; // Array of plants to be displayed.
  @Input() header: String = ""; // Header text for the display.
  @Input() phrase: String = ""; // Descriptive phrase for the display.

  constructor(private router: Router){}

  /**
   * Navigates to the display page of the selected plant.
   * If the selected plant is the current plant, navigate with query parameters.
   * @param index - Index of the selected plant in the plantsArr array.
   */
  onSelectPlant(index: number){
    const selectedPlant = this.plantsArr[index];
    if(selectedPlant === this.plantsArr[this.currentIndex]){
      this.router.navigate(['display'], { queryParams: { plant: JSON.stringify(selectedPlant) } });
    }
    this.currentIndex = index;
  }

  /**
   * Calculates the translation for the plant display based on the current index.
   * Adjusts the translation for different viewport widths.
   * @returns A string for the CSS translateX property.
   */
  getTransform() {
    const viewportWidth = window.innerWidth;
    const mobileBreakpoint = 768;
    let translation = 0;

    if (viewportWidth <= mobileBreakpoint) translation = (this.currentIndex - 1) * -(20 * 16);
    else translation = (this.currentIndex - 0.75) * -(25 * 16);

    return `translateX(${translation}px)`;
  }

  /**
   * Handles the right button click to scroll plants display to the right.
   * Adjusts the visibility of navigation buttons based on the display position.
   */
  buttonRight(){
    if(window.innerWidth > 1060) return;
    const index = this.currentIndex + 1;
    const leftButton = this.leftButton.nativeElement;
    const rightButton = this.rightButton.nativeElement;

    leftButton.style.opacity = "1";

    if(this.plantsArr.length != index) this.onSelectPlant(index);

    if(this.plantsArr.length == index + 1) rightButton.style.opacity = "0";
  }

  /**
   * Handles the left button click to scroll plants display to the left.
   * Adjusts the visibility of navigation buttons based on the display position.
   */
  buttonLeft(){
    if(window.innerWidth > 1060) return;
    const index = this.currentIndex - 1;
    const leftButton = this.leftButton.nativeElement;
    const rightButton = this.rightButton.nativeElement;

    rightButton.style.opacity = "1";

    if(this.currentIndex >= 1) this.onSelectPlant(index);

    if(this.currentIndex == 0) leftButton.style.opacity = "0";

  }
}
