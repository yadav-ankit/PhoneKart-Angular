import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class MainService {

    private subject = new Subject<any>();

    ngOnInit(){
        this.fetchData();
        this.fetchDatas();
      }
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

    public fetchData(){
        const promise = this.http.get(this.afterAuthUrl).toPromise();

        promise.then().then().then().catch();

        promise.then(res => {
            console.log(res)
        }).then(rr => {
            console.log(rr)
        }).catch(oppp => {
            console.log(oppp)
        });

    }

    private async fetchDatas(){
        const data = await this.http.get(this.afterAuthUrl).toPromise();
        console.log("Data: " + JSON.stringify(data)); 
      }

}
