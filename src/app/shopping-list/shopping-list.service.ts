import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsUpdated = new Subject<Ingredient[]>();
  editIngredient = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientByIndex(index: number) {
    return this.getIngredients()[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsUpdated.next(this.getIngredients());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsUpdated.next(this.getIngredients());
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsUpdated.next(this.getIngredients());
  }
  addIngredients(items: Ingredient[]) {
    for (let index = 0; index < items.length; index++) {
      this.addIngredient(items[index]);
    }
    this.ingredientsUpdated.next(this.getIngredients());
  }
}
