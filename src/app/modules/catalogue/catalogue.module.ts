import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MaterialComponentModule } from "src/material.modules";
import { CatalogueComponent } from "./component/catalogue.component";
import { ReviewComponent } from "./component/review.component";


@NgModule({
    declarations: [CatalogueComponent, ReviewComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialComponentModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            {path: 'products', component: CatalogueComponent},
            {path: 'review/:id', component: ReviewComponent},
        ]),

    ]
})
export class CatalogueModule {

}