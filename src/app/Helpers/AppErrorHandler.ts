import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error:any){
        console.log("Error Handler Called");
        console.log(error);
    }
}