import { CommonModule } from "@angular/common";
import { sharedStylesheetJitUrl } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: 'auth', component: AuthComponent }]),
        SharedModule
    ]
})
export class AuthModule {}

// CommonModule to unlock ngIf and ngFor
// FormsModule to unlock template driven forms approach