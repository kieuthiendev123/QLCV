import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { Welfare } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WelfareService {
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

    list(model: Welfare) {
        const url = '/api/welfare/list';
        const body = {
            'name': model.name,
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

    get(model: Welfare) {
        const url = '/api/welfare/get';
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

    insert(model: Welfare) {
        const url = '/api/welfare/create';
        const body = {
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: Welfare) {
        const url = '/api/welfare/update';
        const body = {
            'id': model.id,
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: Welfare) {
        const url = '/api/welfare/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);

    }
}
