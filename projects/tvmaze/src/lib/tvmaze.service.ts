import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './show';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
private readonly apiRoot = 'http://api.tvmaze.com';

  constructor(private http : HttpClient) {
    
   }

   getShow(id:number): Observable<Show> {
      const url  = `${this.apiRoot}/shows/${id}`;    
      return this.http.get<Show>(url);
      
   }
}
