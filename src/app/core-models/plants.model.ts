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
  _id?: string;
}
