import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { ChiSoCLS } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CLSIndexService {
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

    list(model: ChiSoCLS) {
        const url = '/api/clsindex/list';
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

    get(model: ChiSoCLS) {
        const url = '/api/clsindex/get';
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

    insert(model: ChiSoCLS) {
        const url = '/api/clsindex/create';
        const body = {
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns,
            'isLock': model.isLock
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: ChiSoCLS) {
        const url = '/api/clsindex/update';
        const body = {
            'id': model.id,
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns,
            'isLock': model.isLock
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: ChiSoCLS) {
        const url = '/api/clsindex/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });

        return this.http.delete(url, options);

    }
}
