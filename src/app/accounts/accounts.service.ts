import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AccountsService {

    constructor(private http: Http) {}

    getAllCustomers() {
        const nsnUrl: string = 'https://netsense-topictest.sensity.com/v3.0/';

        let headers = new Headers({'Content-type': 'application/json', 'X-CSRF-Token': localStorage.getItem('csrfToken')});
        let options = new RequestOptions({headers: headers,  withCredentials: true });
        console.log(options);
        // return this.http.get(nsnUrl + 'customers', options );
    }
}
