import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidupdateserviceService {

  constructor(private http:HttpClient) { }
  public covid19Reports():Observable<any>{
    return this.http.get("https://corona.lmao.ninja/v2/countries");
    }
    
}
