import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


  activeSection = 1;
  title = "The Leaf Lounge";
  navigated = false;

  constructor(private router: Router)
  {
  }

  public homeClicked() {
    this.navigated = false;
  }

  public displayPlants(){
    this.router.navigate(["/plants"]);
  }
}
