import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsUpdated = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsUpdated.next(this.getIngredient());
  }
  addIngredients(items: Ingredient[]) {
    for (let index = 0; index < items.length; index++) {
      this.addIngredient(items[index]);
    }
    this.ingredientsUpdated.next(this.getIngredient());
  }
}
