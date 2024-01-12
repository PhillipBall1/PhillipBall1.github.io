import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../core-models/plants.model';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  // Determines if the service should use the testing URL or the production URL
  testing = false;
  private host = this.testing ? "http://localhost:3000/API" : "https://phillip-full-stack-4cf7dd0dd91b.herokuapp.com/API";

  constructor(private http: HttpClient) {}

  /**
   * Generic method to fetch plant data from a specified URL.
   * @param url - The endpoint URL to fetch plant data.
   */
  private getPlantsData(url: string): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.host + url);
  }

  /**
   * Fetches an array of all plants.
   */
  public getPlants(): Observable<Plant[]> {
    return this.getPlantsData('/plants');
  }

  /**
   * Fetches an array of featured plants.
   */
  public getFeaturedPlants(): Observable<Plant[]> {
    return this.getPlantsData('/featured-plants');
  }

  /**
   * Fetches an array of indoor plants.
   */
  public getIndoorPlants(): Observable<Plant[]> {
    return this.getPlantsData('/indoor-plants');
  }

  /**
   * Fetches an array of edible plants.
   */
  public getEdiblePlants(): Observable<Plant[]> {
    return this.getPlantsData('/edible-plants');
  }

  /**
   * Fetches a specific plant by its ID.
   * @param id - The unique identifier of the plant.
   */
  public getPlantByID(id: string): Observable<Plant> {
    return this.http.get<Plant>(`${this.host}/plants/${id}`);
  }

  /**
   * Creates a new plant in the database.
   * @param plant - The plant object to create.
   */
  public createPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(`${this.host}/plants`, plant);
  }

  /**
   * Updates an existing plant in the database.
   * @param plant - The plant object with updated information.
   */
  public updatePlant(plant: Plant): Observable<Plant> {
    return this.http.put<Plant>(`${this.host}/plants/${plant._id}`, plant);
  }

  /**
   * Deletes a plant from the database by its ID.
   * @param id - The unique identifier of the plant to be deleted.
   */
  public deletePlant(id: string): Observable<Plant> {
    return this.http.delete<Plant>(`${this.host}/plants/${id}`);
  }
}
