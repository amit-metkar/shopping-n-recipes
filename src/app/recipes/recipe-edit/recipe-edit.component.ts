import { Subscription } from 'rxjs/Rx';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';

import {
  RecipeService
} from '../recipe.service';
import {
  Recipe
} from '../recipe.model';
import {
  Ingredient
} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  index: number;
  editMode = false;
  recipeForm: FormGroup;

  paramsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.index = +params['index'];
        this.editMode = params['index'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipe;
    const recipeIngredient = new FormArray([]);
    if (this.editMode) {
      recipe = this.recipeService.getRecipe(this.index);
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredient.push(this.addIngredientControls(ingredient));
        }
      }
    } else {
      recipe = new Recipe('', '', '', []);
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipe.name, Validators.required),
      'imagePath': new FormControl(recipe.imagePath, Validators.required),
      'description': new FormControl(recipe.description, Validators.required),
      'ingredients': recipeIngredient
    });
  }

  onAddIngredient() {
    ( < FormArray > this.recipeForm.get('ingredients')).push(this.addIngredientControls(new Ingredient('', null)));
  }

  onRemoveIngredient(index: number) {
    ( < FormArray > this.recipeForm.get('ingredients')).removeAt(index);
  }

  private addIngredientControls(ingredient: Ingredient): FormGroup {
    return new FormGroup({
      'name': new FormControl(ingredient.name, Validators.required),
      'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.index, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute
    });
  }

  public ngOnDestroy(): void {
      this.paramsSubscription.unsubscribe();
  }
}

