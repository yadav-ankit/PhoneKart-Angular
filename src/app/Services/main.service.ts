import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class MainService {

    private subject = new Subject<any>();

    constructor(private http: HttpClient) { }

    afterAuthUrl = 'http://localhost:8765';

    public callCartService(token) {
        console.log("Inside Cart Service CALL")
        console.log(token)
        var headers = new HttpHeaders();
        headers = headers.set("Authorization", "Bearer " + token);


        this.http.get(this.afterAuthUrl + "/carts", { headers: headers }).subscribe(res => {
            console.log(res);

        }, (err) => { console.log(err) });
    }

}
