import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  // public name: string;
  // public description: string;
  // public imagePath: string;
  // public ingredients: Ingredient[];

  constructor(private name: string, private description: string, private imagePath: string, private ingredients: Ingredient[]) {
    // this.name = name;
    // this.description = description;
    // this.imagePath = imagePath;
    // this.ingredients = ingredients;
  }
  getIngredients() {
    return this.ingredients;
  }
}
