import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  @ViewChildren('overlay') overlays!: QueryList<ElementRef>;
  @ViewChildren('image') images!: QueryList<ElementRef>;
  navigated = false;
  constructor(private router: Router){}

  title = 'The Leaf Lounge';

  ngOnInit() {
    this.setOverlayPositions();
  }
  public displayPlantList(){
    this.router.navigate(['list-plants']);
  }

  public homeClicked(){
    this.navigated = false;
  }

  private setOverlayPositions() {
    this.overlays.forEach((overlay: ElementRef) => {
      const overlayElement = overlay.nativeElement;
      const imageWidth = overlayElement.previousElementSibling.clientWidth;
      const imageHeight = overlayElement.previousElementSibling.clientHeight;

      // Center the overlay within the image
      overlayElement.style.top = `50%`;
      overlayElement.style.left = `50%`;
      overlayElement.style.transform = `translate(-50%, -50%)`;
    });
  }
}


