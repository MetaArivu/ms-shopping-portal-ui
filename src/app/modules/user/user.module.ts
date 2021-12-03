import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MaterialComponentModule } from "src/material.modules";
import { AddUserComponent } from "./component/add.user.component";
import { LoginComponent } from "./component/login.component";


@NgModule({
    declarations: [LoginComponent, AddUserComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialComponentModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'auth', pathMatch: 'full' },
            { path: 'auth', component: LoginComponent },
            { path: 'add', component: AddUserComponent }
        ]),

    ]
})
export class UserModule {

}