import { RecipeService } from './recipe.service';
import { DataStorageService } from '../shared/services/data-storage.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Recipe } from './recipe.model';

@Injectable()

export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(private dsService: DataStorageService, private recipeService: RecipeService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    return this.dsService.fetchRecipes().map(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
        return recipes;
      }
    );
    // return this.recipeService.getRecipes();
  }
}
