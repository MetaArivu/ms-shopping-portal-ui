import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/common/component/page.not.found.component';
import { AuthGaurdService } from './modules/common/service/auth.gaurd.service';
import { LoginComponent } from './modules/user/component/login.component';

const routes: Routes = [
  { path: "", redirectTo: "user/auth", pathMatch: 'full' },
  {
    path: "user",  
    //canActivateChild :[AuthGaurdService],
    loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule)
  },
  {
    path: "home", 
    canActivate :[AuthGaurdService],
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "page-not-found", component: PageNotFoundComponent
  },
  {
    path: "test", redirectTo:"page-not-found"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
