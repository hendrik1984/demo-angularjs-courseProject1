import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false}) shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemindex: number;
  editedItem: Ingredient;

  constructor(private shopingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shopingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemindex = index;
          this.editMode = true;
          this.editedItem = this.shopingListService.getIngredient(index);
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shopingListService.updateIngredient(this.editedItemindex, newIngredient);
    } else {
      this.shopingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onDelete() {
    this.shopingListService.deleteIngredient(this.editedItemindex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
