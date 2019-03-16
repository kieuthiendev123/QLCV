import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { authgruop } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthgruopService {
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

    list(model: authgruop) {
        const url = '/api/authgruop/List';
        const body = {
            'code': model.codeAuthgr,
            'name': model.nameAuthgr,
            'pageNo': 1,
            'pageSize': -1
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    get(model: authgruop) {
        const url = '/api/authgruop/Get';
        const body = {
            'id': model.id
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    insert(model: authgruop) {
        const url = '/api/authgruop/Create';
        const body = {
            'id': model.id,
            'codeAuthgr': model.codeAuthgr,
            'nameAuthgr': model.nameAuthgr,
            'auth_id': model.auth_id,
            'auth_name': model.auth_name,
            'note': model.note,
            'status': model.status,
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: authgruop) {
        const url = '/api/authgruop/update';
        const body = {
            'id': model.id,
            'codeAuthgr': model.codeAuthgr,
            'nameAuthgr': model.nameAuthgr,
            'auth_id': model.auth_id,
            'auth_name': model.auth_name,
            'note': model.note,
            'status': model.status,
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: authgruop) {
        const url = 'api/authgruop/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);

    }
}
