import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MaterialComponentModule } from "src/material.modules";
import { CheckOutComponent } from "./component/checkout.component";
import { MyCartComponent } from "./component/mycart.component";


@NgModule({
    declarations: [MyCartComponent, CheckOutComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialComponentModule,
        RouterModule.forChild([
            { path: '', redirectTo:"details",pathMatch : "full" },
            { path: 'details', component: MyCartComponent },
            { path: 'checkout', component: CheckOutComponent },
        ]),

    ]
})
export class MyCartModule {

}