import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeServise: RecipeService) {

  }

  ngOnInit(): void {
    // console.log(this.recipe); // cant put under constructor() for logging this @Input
  }

  onSelected() {
    // this.recipeSelected.emit();
    this.recipeServise.recipeSelected.emit(this.recipe);
  }

}
