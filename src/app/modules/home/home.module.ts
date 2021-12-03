import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MaterialComponentModule } from "src/material.modules";
import { HomeComponent } from "./component/home.component";


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialComponentModule,
        RouterModule.forChild([
            {
                path: '', component: HomeComponent, children: [
                    {
                        path: "catalogue",
                        loadChildren: () => import("../catalogue/catalogue.module").then(m => m.CatalogueModule),
                    },
                    {
                        path: "cart",
                        loadChildren: () => import("../mycart/mycart.module").then(m => m.MyCartModule),
                    },
                    {
                        path: "payment",
                        loadChildren: () => import("../payment/payment.module").then(m => m.PaymentModule),
                    },
                    {
                        path: "myorders",
                        loadChildren: () => import("../myorders/myorder.module").then(m => m.MyOrderModule),
                    }

                ]
            },

        ]),

    ]
})
export class HomeModule {

}