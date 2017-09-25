import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },
  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuardService],
  //   canActivate: [AuthGuardService], resolve: { recipes: RecipesResolverService } }
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule',
    canActivate: [AuthGuardService], resolve: { recipes: RecipesResolverService } }
  // Removed canLoad: [AuthGuardService], because canLoad will make preload strategy prevent loading this module
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class AppRouterModule { }
