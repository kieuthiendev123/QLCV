import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from '../_models/index';

@Injectable()
export class ProjectService {
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

    list(model: Project) {
        const url = '/api/Project/List';
        const body = {           
            'codeProject': model.codeProject,
            'nameProject': model.nameProject,
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

    get(model: Project) {
        const url = '/api/Project/get';
        const body = {
            'id': model.id,
            'codeProject': model.codeProject,
            'nameProject': model.nameProject,
            'startDate' :model.startDate,
            'endDate' : model.endDate,
            'note' : model.note
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    insert(model: Project) {
        const url = '/api/Project/create';
        const body = {
            'codeProject': model.codeProject,
            'nameProject': model.nameProject,
            'startDate' :model.startDate,
            'endDate' : model.endDate,
            'note' : model.note
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: Project) {
        const url = '/api/Project/update';
        const body = {
            'id': model.id,
            'codeProject': model.codeProject,
            'nameProject': model.nameProject,
            'startDate' :model.startDate,
            'endDate' : model.endDate,
            'note' : model.note
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: Project) {
        const url = '/api/project/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);

    }
}
