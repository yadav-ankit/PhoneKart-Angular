import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"; 
import { User } from '../Models/user';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = 'http://localhost:8765/signin/';
  singupUrl = 'http://localhost:8080/register/';

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

  public loginAPI(user : User):  Observable<any>{
    console.log("inside loginAPI " + user.username + " " + user.password)
    return this.http.get(this.loginUrl);
  }

  public signupAPI():  Observable<any>{
    return this.http.get(this.loginUrl);
  }
}
