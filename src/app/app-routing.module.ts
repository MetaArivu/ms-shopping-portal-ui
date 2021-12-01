import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/user/component/login.component';

const routes: Routes = [
  { path: "", redirectTo: "user", pathMatch: 'full' },
  {
    path: "user", loadChildren: () =>
      import("./modules/user/user.module").then(m => m.UserModule)
  },
  {
    path: "home", loadChildren: () =>
      import("./modules/home/home.module").then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
