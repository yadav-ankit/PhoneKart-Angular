import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"; 


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = 'http://localhost:8765/check/';
  anotherUrl = 'http://localhost:8080/employees/';

  /*
  getAllEmployee(): Observable<Employee[]> {
 
    return this.http.get<Employee[]>(this.anotherUrl)
    .pipe(map((response: Employee[]) => response));
}

getSites(): Observable<Employee> {
     return this.http.get<Employee>(this.testUrl);
}

private extractData(res: Employee){
    //let body = res[0].   ();//.Location; // Cannot read property 'data' of undefined
  return res;
}

*/

  public getMyDetails():  Observable<any>{
    return this.http.get(this.loginUrl);
  }
}
