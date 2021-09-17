import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { UserService, USER_SERVICE } from './Services/user.service';




@NgModule({
  declarations:[],
  imports:[CommonModule],
  exports:[] ,
  providers:[ {
    provide:USER_SERVICE,
    useClass:UserService
  },],

})
 
export class UserModule{}