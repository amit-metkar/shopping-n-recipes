import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoute: Routes = [
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuardService],
  resolve: { recipes: RecipesResolverService }, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent},
    { path: ':index', component: RecipeDetailComponent },
    { path: ':index/edit', component: RecipeEditComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoute)
  ],
  exports: [RouterModule]
})

export class RecipesRoutingModule {

}
