import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Plant } from '../models/plants.model';
import { ObjectId } from 'mongodb';

@Injectable({ providedIn: 'root' })
export class PlantsService {

    private host = "https://phillip-full-stack-4cf7dd0dd91b.herokuapp.com";

    constructor(private http: HttpClient) {}

    public getPlants(callback: (plant: Plant[]) => void): void {
      this.http.get<Plant[]>(this.host + "/plants").subscribe((plant: Plant[]) => {
        callback(plant);
      });
    }

    public getFeaturedPlants(callback: (plants: Plant[]) => void): void {
      let request = this.host + '/featured-plants';

      this.http.get<Plant[]>(request).subscribe((plants: Plant[]) => {
        callback(plants);
      });
    }

    public getIndoorPlants(callback: (plants: Plant[]) => void): void {
      let request = this.host + '/indoor-plants';

      this.http.get<Plant[]>(request).subscribe((plants: Plant[]) => {
        callback(plants);
      });
    }

    public getEdiblePlants(callback: (plants: Plant[]) => void): void {
      let request = this.host + '/edible-plants';

      this.http.get<Plant[]>(request).subscribe((plants: Plant[]) => {
        callback(plants);
      });
    }

    public getPlantByID(id: ObjectId, callback: (plant: Plant) => void): void {
      let request = this.host + `/plants/${id}`;

      this.http.get<Plant>(request).subscribe((plant: Plant) => {
        callback(plant);
      });
    }

    public getPlantByName(plantName: String, callback: (plant: Plant[]) => void): void {
      let request = this.host + `/plants/${plantName}`;

      this.http.get<Plant[]>(request).subscribe((plant: Plant[]) => {
        callback(plant);
      });
    }

    public getPlantByFamilyName(familyName: String, callback: (plant: Plant[]) => void): void {
      let request = this.host + `/plants/family/${familyName}`;

      this.http.get<Plant[]>(request).subscribe((plant: Plant[]) => {
        callback(plant);
      });
    }

    public getPlantByScientificName(scientificName: String, callback: (plant: Plant[]) => void): void {
      let request = this.host + `/plants/scientific/${scientificName}`;

      this.http.get<Plant[]>(request).subscribe((plant: Plant[]) => {
        callback(plant);
      });
    }

    public createPlant(plant: Plant, callback: () => void): void {
      this.http.post<Plant>(this.host + "/plants", plant).subscribe((data) => {
        callback();
      });
    }

    public updatePlant(plant: Plant, callback: () => void): void {
      this.http.put<Plant>(this.host + "/plants", plant).subscribe((data) => {
        callback();
      });
    }

    public deletePlant(id: ObjectId, callback: () => void): void {
      this.http.delete<Plant>(this.host + "/plants/" + id).subscribe((data) => {
        callback();
      });
    }

}
