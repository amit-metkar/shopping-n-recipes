import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputField: ElementRef;
  @ViewChild('amountInput') amountInputField: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addItem() {
    this.slService.addIngredient(
      new Ingredient(
        this.nameInputField.nativeElement.value, parseInt(this.amountInputField.nativeElement.value, 0)
      )
    );
  }

}
