import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from '../_models/index';
import { auth } from '../_models/auth';

@Injectable()
export class authService {
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

    list(model: auth) {
        const url = '/api/Auth/List';
        const body = {         
            'codeProject': model.codeAuth,
            'nameProject': model.nameAuth,
            'pageNo': 1,
            'pageSize': 50
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    get(model: auth) {
        const url = '/api/Auth/Get';
        const body = {
            'id': model.id,
            'codeAuth': model.codeAuth,
            'nameAuth': model.nameAuth,
            'description' : model.description
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    insert(model: auth) {
        const url = '/api/Auth/Create';
        const body = {
            'codeAuth': model.codeAuth,
            'nameAuth': model.nameAuth,
            'description' : model.description

            
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: auth) {
        const url = '/api/Auth/Update';
        const body = {
            'codeAuth': model.codeAuth,
            'nameAuth': model.nameAuth,
            'description' : model.description
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: auth) {
        const url = '/api/Auth/Delete' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);

    }
}
