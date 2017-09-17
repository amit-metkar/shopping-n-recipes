import { Recipe } from '../recipes/recipe.model';
import { Response } from '@angular/http';
import { Component } from '@angular/core';

import { DataStorageService } from '../shared/services/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private dsService: DataStorageService, private recipeService: RecipeService) {}

  onSaveData() {
    this.dsService.storeRecipes().subscribe(
      (response: Response) => { console.log(response.json()); }
    );
  }

  onFetchData() {
    this.dsService.fetchRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
