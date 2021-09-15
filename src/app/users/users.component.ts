import {
  Component, Inject, OnInit, Optional
} from '@angular/core';
import { SkyModalService } from '@skyux/modals';
import { EditModalComponent } from '../edit/edit-modal.component';
import { SkyToastService, SkyToastType } from '@skyux/toast';

import { UserInterface, USER_SERVICE } from '../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
       usersList:any;
       headers = ["ID", "FirstName", "LastName", "Age", "Email","Company Id","DOJ","Salary","Actions"];
       constructor(private modal: SkyModalService,private toastService:SkyToastService,@Inject(USER_SERVICE)
       @Optional()
       private _userService:UserInterface
       ){}
       public helpKey: string = 'help-demo.html';
       public modalSize: string = 'medium';

      ngOnInit(){
        this._userService.getAllUsers().subscribe((res)=>{
          console.log(res);
          this.usersList=res;
        })
      }
      
      refreshfunction(){
        console.log("Refresh called");
        this._userService.getAllUsers().subscribe((res)=>{
          console.log(res);
          this.usersList=res;
        })
      }
      public onDeleteClick(users:any):void{
        this._userService.deleteUser(users.id).subscribe(()=>{
          this.toastService.openMessage('Record Deleted Successsfully', {
            type: SkyToastType.Success,
            autoClose: true
          });
         this.refreshfunction();

        })
      
 
       }
      public onOpenModalClick(obj:any): void {
         let obj1 =Object.assign({}, obj);
        const modalInstanceType: any = EditModalComponent;
        const options: any = {
          helpKey: this.helpKey,
          size: this.modalSize,
          data: obj1
        };
    
        this.modal.open(modalInstanceType, options).closed.subscribe((data => {
          if(data && data.data){
          this._userService.updateUser(data.data.id,data.data).subscribe((res)=>{
            this.toastService.openMessage('Records Updated Successsfully', {
              type: SkyToastType.Success,
              autoClose: true
            });
           this.refreshfunction();

          })
        
        }
        }));
       
        
      }
      

}
