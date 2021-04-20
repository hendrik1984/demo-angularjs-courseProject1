import { NgModule } from "@angular/core";

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [ShoppingListComponent, ShoppingEditComponent,],
    imports: [
        RouterModule.forChild([
            { path: 'shopping-list', component: ShoppingListComponent }
        ]),
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class ShoppingListModule {}

// CommonModule unlock *ngFor and *ngIf