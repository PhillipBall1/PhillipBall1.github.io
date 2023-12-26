import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from '../models/plants.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-display-plant',
  templateUrl: './display-plant.component.html',
  styleUrls: ['./display-plant.component.css']
})
export class DisplayPlantComponent implements OnInit {
  plant: Plant;

  constructor(private app: AppComponent, private route: ActivatedRoute) {
    this.plant = {} as Plant;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const plantString = params['plant'];
      if (plantString) {
        this.plant = JSON.parse(plantString);
      }
    });
  }
}
