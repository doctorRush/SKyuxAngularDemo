import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about/about.component";
import { RegisterComponent } from "./registration/register.component";
import { UsersComponent } from "./users/users.component";
import { CompaniesComponent } from "./companies/companies.component";
import { NotFoundComponent } from "./notFound/not-found.component";
import {  AuthGuardService } from "./services/auth.guard";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "registration",
    component: RegisterComponent
  },
  {
    path: "users",
    component: UsersComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: "companies",
    component: CompaniesComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
