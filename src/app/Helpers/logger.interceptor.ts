import {
  HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
  } from '@angular/common/http';
  import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
  
  export class LoggerInterceptor implements HttpInterceptor {
    
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      console.log("Logger: Method Type:"+request.method+"- Url:" +request.url+"-Body:"+request.body);
      return next.handle(request).pipe(
          tap(evt => {
              if (evt instanceof HttpResponse) {
               // console.log("Response"+JSON.stringify(evt.body))
                  if(evt.body&&evt.status)
                      console.log("Response Recieved Successfully");
                   
              }
          }),
          catchError((err: any) => {
              if(err instanceof HttpErrorResponse) {
                 console.log("Error from API:"+err.message+err.name)
                 
              }
              return of(err);
          }));
  
    }
  }