import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  ingredientsUpdated = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsUpdated.emit(this.getIngredient());
  }
  addIngredients(items: Ingredient[]) {
    for (let index = 0; index < items.length; index++) {
      this.addIngredient(items[index]);
    }
    this.ingredientsUpdated.emit(this.getIngredient());
  }
}
