import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlantsService } from './service/plants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = 'The-Leaf-Lounge';
  constructor(private router: Router)
  {

  }

  public displayPlantList(){
    this.router.navigate(['list-plants'], { queryParams: { data: new Date()} });
  }
}


