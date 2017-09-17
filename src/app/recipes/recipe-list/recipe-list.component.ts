import { Subscription } from 'rxjs/Rx';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // recipes: Recipe[] = [];
  recipeChangedSubscription: Subscription;

  @Input() recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.recipes = this.recipeService.getRecipes();

    this.recipeChangedSubscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => { this.recipes = recipes; }
    );
  }

}
