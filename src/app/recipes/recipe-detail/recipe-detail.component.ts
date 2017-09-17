import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from './../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  index: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.index = +this.route.snapshot.params['index']
     this.setRecipe(this.index);

     this.route.params.subscribe(
       (params: Params) => { this.index = +params['index'];  this.setRecipe(this.index); }
     );
  }

  private setRecipe(index: number) {
    this.recipe = this.recipeService.getRecipe(index);
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
