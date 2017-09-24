import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { AuthService } from '../../auth/auth.service';
import { Recipe } from '../../recipes/recipe.model';
import { RecipeService } from '../../recipes/recipe.service';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private dsService: DataStorageService,
    private recipeService: RecipeService,
    private authService: AuthService) {}

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

  onLogout() {
    this.authService.signoutUser();
  }
}
