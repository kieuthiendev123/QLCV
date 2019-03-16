import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { Patients } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DoctorService {
    token = '';
    constructor(private http: Http) {
        this.token = localStorage.getItem('token');
    }

    getCommonHeader() {
        const header = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');

        return header;
    }

    getHeaderWithToken() {
        const header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    }

    listPatients(status?: number, search?: string) {
        const url = '/api/MedicalExamination/ListByDocter';
        const body = {
            "PageNo": 1,
            "PageSize": 10,
            "Status": status,
            "code": search
        };
        console.log(body);
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });

    }

    callKham(id?: number) {
        const url = '/api/MedicalExamination/Call?id='+id;
        const body = {
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }
}
