import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;

 
  constructor(private http:HttpClient){ }

  createUser(info:any){

    let httpHeaders =new HttpHeaders({
     
      'Authorization': 'Token fbdd071f628c20f62a86b118c6b8a6918104bbc1'
      
    
   })

    return this.http.post('https://healthcarewebapp.herokuapp.com/WebApp/Patient/Register/',info,{headers:httpHeaders});
  }
  loginUser(info:any){
    let httpHeaders =new HttpHeaders({
     
      'Authorization': 'Token fbdd071f628c20f62a86b118c6b8a6918104bbc1'
    
   })
    return this.http.post('https://healthcarewebapp.herokuapp.com/WebApp/Patient/Login/',info,{headers:httpHeaders});

  }
 
}
