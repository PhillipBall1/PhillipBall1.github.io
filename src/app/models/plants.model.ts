import { ObjectId } from "mongodb";

export class Plant {
  [key: string]: any;
  plant_name: string = '';
  family_name: string = '';
  scientific_name: string = '';
  plant_description: string = '';
  image: string = '';
  price: number = 0;
  difficulty: number = 0;
  featured: boolean = false;
  indoor: boolean = false;
  edible: boolean = false;
  _id?: ObjectId;

  get plantName(): string { return this.plant_name }
  set plantName(plant_name: string) { this.plant_name = plant_name; }

  get familyName(): string { return this.family_name }
  set familyName(family_name: string) { this.family_name = family_name; }

  get scientificName(): string { return this.scientific_name }
  set scientificName(scientific_name: string) { this.scientific_name = scientific_name; }

  get plantDescription(): string { return this.plant_description }
  set plantDescription(plant_description: string) { this.plant_description = plant_description; }

  get plantImage(): string { return this.image }
  set plantImage(image: string) { this.image = image; }

  get plantPrice(): number { return this.price }
  set plantPrice(price: number) { this.price = price; }

  get plantDifficulty(): number { return this.difficulty }
  set plantDifficulty(difficulty: number) { this.difficulty = difficulty; }

  get plantFeatured() : boolean { return this.featured }
  set plantFeatured(featured: boolean) { this.featured = featured }

  get plantEdible() : boolean { return this.edible }
  set plantEdible(edible: boolean) { this.edible = edible }

  get plantIndoor() : boolean { return this.indoor }
  set plantIndoor(indoor: boolean) { this.indoor = indoor }




}
