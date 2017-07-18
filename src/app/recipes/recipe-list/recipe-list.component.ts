import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeSelect = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'Biryani is rice with spices and chicken',
    'http://files.hungryforever.com/wp-content/uploads/2016/03/07154511/mm.jpg'),
    new Recipe('Veg Biryani', 'Biryani is rice with spices and veg',
    'http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Vegetable-Biryani-KhaanaKhazana.jpg')
  ];

  constructor() { }

  ngOnInit() {
    //this.recipeSelect.emit(this.recipes[0]);
  }

  onRecipeSelection(recipe: Recipe) {
    this.recipeSelect.emit(recipe);
  }
}
