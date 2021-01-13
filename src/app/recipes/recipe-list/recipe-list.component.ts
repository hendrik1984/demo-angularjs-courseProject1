import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe', 
      'This a simple a test', 
      'https://img.freepik.com/free-photo/juicy-steak-rare-beef-with-spices-wooden-board-garnish-asparagus_2829-1513.jpg?size=626&ext=jpg'),
      new Recipe(
        'A test Recipe', 
        'This a simple a test', 
        'https://img.freepik.com/free-photo/juicy-steak-rare-beef-with-spices-wooden-board-garnish-asparagus_2829-1513.jpg?size=626&ext=jpg')
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
