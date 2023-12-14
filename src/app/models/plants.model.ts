import { ObjectId } from "mongodb";

export class Plant {
  constructor(
    public plant_name: string,
    public family_name: string,
    public scientific_name: string,
    public plant_description: string,
    public image: string,
    public price: number,
    public id?: ObjectId) {}

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
}
