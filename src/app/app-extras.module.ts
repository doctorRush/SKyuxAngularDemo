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
import {  AuthGuardService } from './services/auth.guard';
import { EditModalComponent } from './edit/edit-modal.component';
import { AppErrorHandler } from './Helpers/AppErrorHandler';
import { LoggerInterceptor } from './Helpers/logger.interceptor';
import { AppInitializerService } from './services/app-initializer.service';
import { UserService, USER_SERVICE } from './services/user.service';
import { PipeModule } from './PipeModule';
import { SkyAppLocaleProvider } from '@skyux/i18n';
import { TestLocaleProvider } from './test-locale-provider';


export function appInitializerFactory(service: AppInitializerService) {
  return () => service.initialize();
}



@NgModule({
   exports: [
    AppSkyModule,
    AppRoutingModule,
    PipeModule

  ],
  entryComponents: [
    EditModalComponent
  ],
  providers:[
    {
      provide:USER_SERVICE,
      useClass:UserService
    },
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
