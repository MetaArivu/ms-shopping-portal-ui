import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MaterialComponentModule } from "src/material.modules";
import { MyOrderComponent } from "./component/myorder.component";


@NgModule({
    declarations: [MyOrderComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialComponentModule,
        RouterModule.forChild([{ path: '', component: MyOrderComponent }]),

    ]
})
export class MyOrderModule {

}