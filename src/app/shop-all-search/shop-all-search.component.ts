import { Component, OnInit } from '@angular/core';
import { Plant } from '../core-models/plants.model';
import { PlantsService } from '../core-service/plants.service';

@Component({
  selector: 'app-shop-all-search',
  templateUrl: './shop-all-search.component.html',
  styleUrls: ['./shop-all-search.component.css']
})
export class ShopAllSearchComponent implements OnInit {

  masterPlants: Plant[] = []; // Master list of plants retrieved from the service.
  displayedPlants: Plant[] = []; // Filtered list of plants to be displayed.

  selectedCategory: string = ''; // Selected category for filtering plants.
  selectedPrice: string = ''; // Selected price range for filtering plants.
  searchQuery: string = ''; // Query string for search functionality.

  constructor(private service: PlantsService) {}

  /**
   * OnInit lifecycle hook to fetch and display the initial list of plants.
   */
  ngOnInit() {
    this.service.getPlants().subscribe({
      next: (plants: Plant[]) => {
        this.masterPlants = plants;
        this.displayedPlants = [...this.masterPlants];
      },
      error: (error) => console.error('Error fetching plants:', error)
    });
  }

  /**
   * Applies search and filter criteria to the list of plants.
   * Updates the displayedPlants based on the search query, selected category, and price.
   */
  applyFilters() {
    this.displayedPlants = this.masterPlants.filter(plant => {
      const matchesSearch = this.searchQuery ? plant.plant_name.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
      const matchesCategory = this.selectedCategory ? (this.selectedCategory === 'indoor' ? plant.indoor : !plant.indoor) : true;
      const matchesPrice = this.selectedPrice ? this.isWithinSelectedPrice(plant.price) : true;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }

  /**
   * Determines if a given plant's price falls within the selected price range.
   * @param price The price of the plant.
   * @returns A boolean indicating whether the plant's price is within the selected range.
   */
  private isWithinSelectedPrice(price: number): boolean {
    const [minPrice, maxPrice] = this.selectedPrice.split(',').map(Number);
    return price >= minPrice && price <= maxPrice;
  }
}
