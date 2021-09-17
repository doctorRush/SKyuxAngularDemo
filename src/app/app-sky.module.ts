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
  SkyFluidGridModule, SkyToolbarModule
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

import { SkyAgGridModule } from '@skyux/ag-grid';

import { SkyDataManagerModule } from '@skyux/data-manager';



import {SkyListViewGridModule} from '@skyux/list-builder-view-grids'

import { SkyListModule } from '@skyux/list-builder';

// import { SkyGridModule } from '@skyux/grids';

import { SkyLookupModule, SkySearchModule } from '@skyux/lookup';

import { SkyGridModule } from '@skyux/grids';


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
    SkyAgGridModule,  
    SkyDataManagerModule,
    SkyListViewGridModule,
    SkyListModule,
    SkyGridModule,
    SkyLookupModule,
    SkyToolbarModule,
    SkySearchModule
   

  ],

})
export class AppSkyModule { }
