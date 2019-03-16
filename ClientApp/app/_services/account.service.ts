import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { Account,OtherList, OtherListType } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AccountService {
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

    listOther(model: OtherList) {
        const url = '/api/OtherList/list';
        const body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': 50
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => {
                // console.log(res);
                // console.log(res.json());
                return res.json();
            })
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    list(model: Account) {
        const url = '/api/account/list';
        const body = {
            'fullname': model.fullName,
            'pageNo': 1,
            'pageSize': 10
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    get(model: Account) {
        const url = '/api/account/get';
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

    insert(model: Account) {
        const url = '/api/account/create';
        const body = {
            'userName': model.userName,
            'fullName': model.fullName,
            'password': model.password,
            'email': model.email,
            'address':model.address,
            'status' : model.status,
            'permissionid' :model.permissionid,
            'comment' : null,
            'otherListId' : model.otherListId,
            'otherListName' : model.otherListName,
            'phoneNumber' : model.phoneNumber
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: Account) {
        const url = '/api/Account/UpdateUser';
        const body = {
            'id': model.id,
            'userName': model.userName,
            'fullName': model.fullName,
            'password': model.password,
            'email': model.email,
            'address':model.address,
            'status' : model.status,
            'permissionid' :model.permissionid,
            'comment' : null,
            'otherListId' : model.otherListId,
            'otherListName' : model.otherListName,
            'phoneNumber' : model.phoneNumber
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: Account) {
        const url = '/api/account/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);

    }
}
