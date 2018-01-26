import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AccountsService {

    protected headers: Headers;

    constructor(private http: Http) {
        // this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json')
        // this.headers.append('Accept', 'application/json');
        // this.headers.append('X-CSRF-Token', localStorage.getItem('csrfToken'));
    }

    getAllCustomers() {
        const nsnUrl: string = 'https://netsense-topictest.sensity.com/v3.0/';
        let headers = new Headers({'Content-type': 'application/json',
                                            'Accept': 'application/json',
                                            'X-CSRF-Token': localStorage.getItem('csrfToken')});
        let options = new RequestOptions({headers: headers,  withCredentials: true });

        console.log(this.headers);
        console.log(options);


        return this.http.get(nsnUrl + 'customers', options );
    }
}
