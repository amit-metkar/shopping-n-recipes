import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Biryani',
      'Biryani is rice with spices and chicken',
      'http://files.hungryforever.com/wp-content/uploads/2016/03/07154511/mm.jpg',
      [new Ingredient('Rice', 12), new Ingredient('Masala', 50), new Ingredient('Chicken', 1)]
    ),
    new Recipe(
      'Veg Biryani',
      'Biryani is rice with spices and veg',
      'http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Vegetable-Biryani-KhaanaKhazana.jpg',
      [new Ingredient('Rice', 12), new Ingredient('Masala', 50), new Ingredient('Veg', 1)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.getRecipes()[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
