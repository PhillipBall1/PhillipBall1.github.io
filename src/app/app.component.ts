import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantsService } from './service/plants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{

  navigated: boolean | undefined;

  ngOnInit(): void {
    this.navigated = false;
  }

  title = 'The-Leaf-Lounge';
  constructor(private router: Router)
  {

  }

  public displayPlantList(){
    this.navigated = true;
    this.router.navigate(['list-plants'], { queryParams: { data: new Date()} });
  }

  public clickedHome(){
    this.navigated = false;
  }
}


