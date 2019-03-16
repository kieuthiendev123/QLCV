import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { OtherList, OtherListType } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class OtherListService {
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
    listOtherListType(model: OtherListType) {
        const url = '/api/OtherListType/list';
        const body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': 50
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => {
                console.log(res);
                console.log(res.json());
                return res.json();
            })
            .catch(error => {
                return Observable.throw(error.json());
            });
    }
    list(model: OtherList) {
        const url = '/api/OtherList/list';
        const body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': 50
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => {
                console.log(res);
                console.log(res.json());
                return res.json();
            })
            .catch(error => {
                return Observable.throw(error.json());
            });
    }
    get(model: OtherList) {
        const url = '/api/OtherList/get';
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

    insert(model : OtherList) {
        const url = '/api/OtherList/create';
        const body = {
            'name': model.name,
            'typeId': model.typeId
            
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: OtherList) {
        const url = '/api/OtherList/Update';
            const body = {
            'id':model.id,
            'name': model.name,
            'typeId': model.typeId
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: OtherList) {
        const url = '/api/OtherList/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    }
}
