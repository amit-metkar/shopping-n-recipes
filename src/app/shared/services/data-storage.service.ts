import { Recipe } from '../../recipes/recipe.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { RecipeService } from '../../recipes/recipe.service';

@Injectable()

export class DataStorageService {

  constructor(private http: Http, private recipeSerivce: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://shopping-n-recipe-app.firebaseio.com/recipes.json', this.recipeSerivce.getRecipes());
  }

  fetchRecipes() {
    this.http.get('https://shopping-n-recipe-app.firebaseio.com/recipes.json')
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeSerivce.setRecipes(recipes);
      }
    );
  }
}
