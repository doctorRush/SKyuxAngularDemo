import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about/about.component";
//import { RegisterComponent } from "./UserModule/Components/registration/register.component";
//import { UsersComponent } from "./UserModule/Components/users/users.component";
import { CompaniesComponent } from "./CompanyModule/Components/companies/companies.component";
import { NotFoundComponent } from "./notFound/not-found.component";
//import { UserModule } from "./UserModule/user.module";
import { RegisterComponent } from "./UserModule/Components/registration/register.component";
import { UsersComponent } from "./UserModule/Components/users/users.component";
import { AuthGuardService } from "./Helpers/auth.guard";
//import {  AuthGuardService } from "./Helpers/auth.guard";

const routes: Routes = [

      {path: "home", component: HomeComponent},
      {path: "about",component: AboutComponent},
      {path: "registration",component: RegisterComponent},
      {path: "users",component: UsersComponent,canActivate:[AuthGuardService],data:{userType:"signed"}},
      {path: "companies",component: CompaniesComponent},
      {path: "",component: HomeComponent},
     // {path: "user",loadChildren:()=>UserModule},
      {path: "**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
