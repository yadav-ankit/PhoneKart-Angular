import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { User } from '../Models/user';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  loginUrl = 'http://localhost:8765/signin';
  singupUrl = 'http://localhost:8765/register';

  afterAuthUrl = 'http://localhost:8765';

  loginAPI(user: User): Observable<any> {
    var headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    let jwtRequest = {
      username: user.username,
      password: user.password
    };

    return this.http.post(this.loginUrl, jwtRequest);

  }


  public hello(token) {
    console.log("hello Service called !!!")
    console.log(token)
    var headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer " + token);


    this.http.get(this.afterAuthUrl + "/hello", { headers: headers }).subscribe(res => {
      console.log(res);

    }, (err) => { console.log(err) });
  }
  public signupAPI(user: User): Observable<any> {
    let token = "something";
    var headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    //  headers.append("Authorization" , "Bearer " + token)
    headers.append('Access-Control-Allow-Origin', '*');

    // this api will give me a token
    return this.http.post(this.singupUrl, user);
  }
}
