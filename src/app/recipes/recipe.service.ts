import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A test Recipe',
          'This a simple a test',
          'https://img.freepik.com/free-photo/juicy-steak-rare-beef-with-spices-wooden-board-garnish-asparagus_2829-1513.jpg?size=626&ext=jpg'),
          new Recipe(
            'A test Recipe 2',
            'This a simple a test 2',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/marinated-onglet_0-497a617.jpg?webp=true&quality=90&resize=620%2C310')
    ];

    getRecipes() {
        return this.recipes.slice(); // only get the copy of array recipe
    }
}