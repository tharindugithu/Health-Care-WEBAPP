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
     
        'Authorization': 'Token d52989a9af45bcae3c7e3b51a3b1b3ad7c05d090'
      
     })

    return this.http.get('https://healthcarewebapp.herokuapp.com/WebApp/DoctorsList/',{headers:httpHeaders})
  }
}
