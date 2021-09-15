import {
  Component
} from '@angular/core';
import { SkyModalConfiguration, SkyModalInstance } from '@skyux/modals';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  constructor(

    public instance: SkyModalInstance,

    public config : SkyModalConfiguration

  ) { }

  obj: any;



  ngOnInit(){

    const obj:any = this.config;

    this.obj = obj.data;

  }
}
