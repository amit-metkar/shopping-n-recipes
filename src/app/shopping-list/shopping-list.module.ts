import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const shoppingListRoutes: Routes = [
  { path: '', component: ShoppingListComponent }
];

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingListModule { }
