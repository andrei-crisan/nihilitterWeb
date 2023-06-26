import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from './services/authentification.service';

@Injectable()
export class HttpsealInterceptor implements HttpInterceptor {

  constructor(private authentificationService: AuthentificationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authentificationService.token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.authentificationService.token)
      });
    }
    return next.handle(request);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpsealInterceptor,
  multi: true,
};
