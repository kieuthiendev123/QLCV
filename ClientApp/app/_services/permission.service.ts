import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { Permission, PermissionDetail } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PermissionService {
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

    list(model: Permission) {
        const url = '/api/PermissionGroup/List';
        const body = {
            'name': model.name,
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

    listDetail(model: PermissionDetail) {
        const url = '/api/PermissionDetail/ListDetail';
        const body = {
            'Id': model.id,
            'IdP': model.permissionId,
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
    // get(model: OtherListType) {
    //     const url = '/api/OtherListType/get';
    //     const body = {
    //         'id': model.id
    //     };
    //     const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
    //     return this.http.post(url, body, options)
    //         .map(res => res.json())
    //         .catch(error => {
    //             return Observable.throw(error.json());
    //         });
    // }

    insert(model: Permission) {
        const url = '/api/PermissionGroup/create';
        const body = {
            'Name': model.name
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    // update(model: OtherListType) {
    //     const url = '/api/OtherListType/update';
    //     const body = {
    //         'id': model.id,
    //         'name': model.name
    //     };
    //     const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
    //     return this.http.post(url, body, options);
    // }

    // delete(model: OtherListType) {
    //     const url = '/api/OtherListType/delete/' + model.id.toString();
    //     const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
    //     return this.http.delete(url, options);
    // }
}
