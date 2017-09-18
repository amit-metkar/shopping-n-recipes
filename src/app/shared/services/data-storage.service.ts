import {
  Observable
} from 'rxjs/Rx';
import {
  AuthService
} from '../../auth/auth.service';
import {
  Recipe
} from '../../recipes/recipe.model';
import {
  Http,
  Response
} from '@angular/http';
import {
  Injectable
} from '@angular/core';

import {
  RecipeService
} from '../../recipes/recipe.service';

@Injectable()

export class DataStorageService {

  constructor(private http: Http,
    private recipeSerivce: RecipeService,
    private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://shopping-n-recipe-app.firebaseio.com/recipes.json?auth=' + token, this.recipeSerivce.getRecipes());
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://shopping-n-recipe-app.firebaseio.com/recipes.json?auth=' + token)
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
      );
  }
}
