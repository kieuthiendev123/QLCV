import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { Permission, PermissionDetail,PermissionGroup,PerDetail } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PermissionGroupService {
    token = '';
    string = "1,2,3,4,5,6";
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

    list(model: PermissionGroup) {
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

    getAllPermission(category?: String, search?: String): Observable<any> {
        const url = '/api/Permission/GetAll';

        const options = new RequestOptions({
            headers: this.getHeaderWithToken(),
            url: url
        }); 

        return this.http.get(url,options).map((response: Response) => {
            const data = response.json();
            return data;
        });
    }

    getAllWhere(listString: String): Observable<any> {
        const url = '/api/Permission/GetAllWhere?ids2=' + listString;

        // console.log(url);S
        const options = new RequestOptions({
            headers: this.getHeaderWithToken(),
            url: url
        }); 

        return this.http.get(url,options).map((response: Response) => {
            const data = response.json();
            return data;
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

    insert(model: PermissionGroup) {
        const url = '/api/PermissionGroup/create';
        const body = {
            'Name': model.name
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: PermissionGroup) {
        const url = '/api/PermissionGroup/update';
        const body = {
            'Id': model.id,
            'Name': model.name
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: PermissionGroup) {
        const url = '/api/PermissionGroup/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    }
}
