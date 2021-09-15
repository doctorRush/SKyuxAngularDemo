import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyToastModule
} from '@skyux/toast';

import {
  SkyAlertModule,
  SkyKeyInfoModule,
  SkyWaitModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';
import {
  SkyIconModule
} from '@skyux/indicators';
import {
  SkyModalModule
} from '@skyux/modals';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyIdModule, SkyNumericModule } from '@skyux/core';
import { SkyDatepickerModule, SkyDatePipeModule } from '@skyux/datetime';



@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyToastModule,
    SkyIconModule,
    SkyModalModule,
    SkyInputBoxModule,
    SkyIdModule,
    SkyDatepickerModule,
    SkyDatePipeModule,
    SkyWaitModule,
    SkyNumericModule,

  ],

})
export class AppSkyModule { }
