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

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.editSubscription = this.slService.editIngredient.subscribe(
      (index: number) => {
        const ingredient = this.slService.getIngredientByIndex(index);
        this.shoppingForm.reset();
        this.shoppingForm.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        });
      }
    );
  }

  addItem() {
    this.slService.addIngredient(
      new Ingredient(
        this.shoppingForm.value.name, +this.shoppingForm.value.amount
      )
    );
  }

  public ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
}
