import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputField: ElementRef;
  @ViewChild('amountInput') amountInputField: ElementRef;

  @Output() shoppingItem = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  // addItem(name: HTMLInputElement, amount: HTMLInputElement) {
  //   this.shoppingItem.emit(new Ingredient(name.value, parseInt(amount.value, 0)));
  // }

  addItem() {
    this.shoppingItem.emit(
      new Ingredient(
        this.nameInputField.nativeElement.value, parseInt(this.amountInputField.nativeElement.value, 0)
      )
    );
  }

}
