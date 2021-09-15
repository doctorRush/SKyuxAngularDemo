import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { UserTitlePipe } from './users/userTitle.pipe';



@NgModule({
  declarations:[UserTitlePipe], 
  imports:[CommonModule],
  exports:[UserTitlePipe] 
})
 
export class PipeModule{}