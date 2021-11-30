import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor {

  constructor(private _router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = this.handleError(error);
        return throwError(errorMessage);
      })
    )
  }
  private handleError = (error: HttpErrorResponse) : any => {
    if(error.status === 404){
      return this.handleNotFound(error);
    }
    else if(error.status === 400){
      return this.handleBadRequest(error);
    }
  }
  
  private handleNotFound = (error: HttpErrorResponse): string => {
    this._router.navigate(['/404']);
    return error.message;
  }
  
  private handleBadRequest = (error: HttpErrorResponse): string => {
    if(this._router.url === '/reg'){
      let message = '';
      const values = Object.values(error.error);
      values.map((m: any) => {
         message += m + '<br>';
      })
  
      return message.slice(0, -4);
    }
    else{
      return error.error ? error.error : error.message;
    }
  }
}