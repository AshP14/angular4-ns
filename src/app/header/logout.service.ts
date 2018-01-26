import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http'; 

@Injectable()
export class LogoutService {

    constructor(private http: Http) {}

    userLogout() {

        //let body = JSON.stringify(userInfo);
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.get('https://netsense-topictest.sensity.com/v3.0/logout', options );
    }

}
