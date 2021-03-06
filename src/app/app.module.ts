import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialComponentModule } from 'src/material.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './modules/user/component/login.component';
import { CookieService } from 'ngx-cookie-service';
import { PageNotFoundComponent } from './modules/common/component/page.not.found.component';
import { AuthGaurdService } from './modules/common/service/auth.gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    AppRoutingModule
  ],
  providers: [CookieService, AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
