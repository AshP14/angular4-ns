import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class LoginService {

    constructor(private http: Http) {}

    userLogin(userInfo: any) {

        let body = JSON.stringify(userInfo);
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers,  withCredentials: true });

        return this.http.post('https://netsense-topictest.sensity.com/v3.0/login', body, options );
    }

}

// import {Headers, RequestOptions} from 'angular2/http';
//
// let body = JSON.stringify({ 'foo': 'bar' });
// let headers = new Headers({ 'Content-Type': 'application/json' });
// let options = new RequestOptions({ headers: headers });
//
// return this.http.post(url, body, options)
//     .map(res =>  res.json().data)
//     .catch(this.handleError)