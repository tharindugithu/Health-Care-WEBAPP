import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctordetailsService {

  constructor(private http:HttpClient) { }
  public doctorDetails():Observable<any>{

     let httpHeaders =new HttpHeaders({
     
        'Authorization': 'Token fbdd071f628c20f62a86b118c6b8a6918104bbc1'
      
     })

    return this.http.get('https://healthcarewebapp.herokuapp.com/WebApp/DoctorsList/',{headers:httpHeaders})
  }
}
