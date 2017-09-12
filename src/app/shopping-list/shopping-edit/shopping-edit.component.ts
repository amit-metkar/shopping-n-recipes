import {
  Subscription
} from 'rxjs/Rx';
import {
  NgForm
} from '@angular/forms';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  Ingredient
} from '../../shared/ingredient.model';
import {
  ShoppingListService
} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shoppingForm: NgForm;
  editSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.editSubscription = this.slService.editIngredient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        const ingredient = this.slService.getIngredientByIndex(index);
        this.shoppingForm.reset();
        this.editedItem = ingredient;
        this.shoppingForm.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        });
      }
    );
  }

  onSubmit() {
    console.log(this.shoppingForm);
    if (this.editMode) {
      this.slService.updateIngredient(
        this.editedItemIndex,
        new Ingredient(this.shoppingForm.value.name, +this.shoppingForm.value.amount)
      )
    } else {
      this.slService.addIngredient(
        new Ingredient(this.shoppingForm.value.name, +this.shoppingForm.value.amount)
      );
    }
    this.onClear();
  }

  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  public ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
}
