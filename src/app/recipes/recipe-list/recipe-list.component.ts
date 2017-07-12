import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Biriyani', 'Biriyani is rice with spices and chicken or veg',
    'http://files.hungryforever.com/wp-content/uploads/2016/03/07154511/mm.jpg'),
    new Recipe('Biriyani', 'Biriyani is rice with spices and chicken or veg',
    'http://files.hungryforever.com/wp-content/uploads/2016/03/07154511/mm.jpg'),
    new Recipe('Biriyani', 'Biriyani is rice with spices and chicken or veg',
    'http://files.hungryforever.com/wp-content/uploads/2016/03/07154511/mm.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
