import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ErrorHandler,
  NgModule
} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {
  AppSkyModule
} from './app-sky.module';
import {  AuthGuardService } from './Helpers/auth.guard';
import { EditModalComponent } from './UserModule/Components/edit/edit-modal.component';
import { AppErrorHandler } from './Helpers/AppErrorHandler';
import { LoggerInterceptor } from './Helpers/logger.interceptor';
import { AppInitializerService } from './Helpers/app-initializer.service';
import { SkyAppLocaleProvider } from '@skyux/i18n';
import { TestLocaleProvider } from './test-locale-provider';
import { PipeModule } from './UserModule/PipeModule';
import { UserModule } from './UserModule/user.module';
import { CompanyModule } from './CompanyModule/company.module';
import {  AgGridModule } from 'ag-grid-angular';






export function appInitializerFactory(service: AppInitializerService) {
  return () => service.initialize();
}



@NgModule({
  imports: [AgGridModule.withComponents([])],
   exports: [
    AppSkyModule,
    AppRoutingModule,
    PipeModule,
    UserModule,
    CompanyModule,
    AgGridModule

  ],
  entryComponents: [
    EditModalComponent
  ],
  providers:[
   
    {
       provide: APP_INITIALIZER,
       useFactory: appInitializerFactory,
       deps: [AppInitializerService],
       multi: true,
    },
    {provide:SkyAppLocaleProvider,useClass:TestLocaleProvider},
    {provide:HTTP_INTERCEPTORS,useClass:LoggerInterceptor,multi:true},
    {provide:ErrorHandler,useClass:AppErrorHandler},
    AuthGuardService
  ],
  

})
export class AppExtrasModule { }
