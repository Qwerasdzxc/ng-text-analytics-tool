import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from './services/logger.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(private logger: LoggerService) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (httpRequest.url.includes('dandelion'))
        this.logger.addLog(`[${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}] ${httpRequest.method} ${httpRequest.urlWithParams}`);

    return next.handle(httpRequest);
  }
}