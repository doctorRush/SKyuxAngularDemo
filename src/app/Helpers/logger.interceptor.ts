import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  
  export class LoggerInterceptor implements HttpInterceptor {
    
  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
      
      console.log("Logger: Method Type:"+request.method+"- Url:" +request.url+"-Body:"+request.body);
      return next.handle(request);
    }
  }