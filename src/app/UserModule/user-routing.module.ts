import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../Helpers/auth.guard";
import { RegisterComponent } from "./Components/registration/register.component";
import { UsersComponent } from "./Components/users/users.component";



const routes: Routes = [
     {path: "",component: UsersComponent,canActivate:[AuthGuardService],data:{userType:"signed"}},
     {path: "registration",component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
