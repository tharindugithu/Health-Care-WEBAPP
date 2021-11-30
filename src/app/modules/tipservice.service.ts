import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipserviceService {

  constructor(private http:HttpClient) { }
  
  apiCall():Observable<any> {
    
    return this.http.get('https://webhealthapi.herokuapp.com/news')
}
}
