import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRouterModule } from '../app.router.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/services/data-storage.service';
import { RecipesResolverService } from '../recipes/recipes-resolver.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AppRouterModule
  ],
  exports: [
    AppRouterModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    RecipesResolverService,
    AuthService
  ]
})
export class CoreModule { }
