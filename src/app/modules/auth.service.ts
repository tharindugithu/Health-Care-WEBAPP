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
     
      'Authorization': 'Token d52989a9af45bcae3c7e3b51a3b1b3ad7c05d090'
      
    
   })

    return this.http.post('https://healthcarewebapp.herokuapp.com/WebApp/Patient/Register/',info,{headers:httpHeaders});
  }
  loginUser(info:any){
    let httpHeaders =new HttpHeaders({
     
      'Authorization': 'Token d52989a9af45bcae3c7e3b51a3b1b3ad7c05d090'
    
   })
    return this.http.post('https://healthcarewebapp.herokuapp.com/WebApp/Patient/Login/',info,{headers:httpHeaders});

  }
 
}
