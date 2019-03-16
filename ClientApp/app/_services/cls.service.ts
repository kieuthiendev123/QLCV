import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { CanLamSang } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CLSService {
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

    list(model: CanLamSang) {
        const url = '/api/cls/list';
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

    get(model: CanLamSang) {
        const url = '/api/cls/get';
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

    insert(model: CanLamSang) {
        const url = '/api/cls/create';
        const body = {
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns,
            'effectDate': model.effectDate,
            'note': model.note,
            'parentId': model.parentId ? model.parentId : 0
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: CanLamSang) {
        const url = '/api/cls/update';
        const body = {
            'id': model.id,
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns,
            'effectDate': model.effectDate,
            'note': model.note,
            'parentId': model.parentId
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: CanLamSang) {
        const url = '/api/cls/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    }
}
