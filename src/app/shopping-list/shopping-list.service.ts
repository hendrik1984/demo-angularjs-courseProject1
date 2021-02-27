import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
        // sometimes when you add need to check if the array data is slice/copy or not,
        // if its slice/copy you cant add because you add data into copy array not the reference one

        // return this.ingredients;
        // the simple way to add is using reference data instead copy
        // this part related to shopping list add content
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);

        // if you use getIngredients slice() need to emit data in here
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}