import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PersonProject,Project,Account} from '../_models/index';

@Injectable()
export class PersonProjectService {
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

    listDuAn(model: Project) {
        const url = '/api/Project/List';
        const body = {           
            'name': model.nameProject,
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
    
    listDataUsers(model:Account ){
        const url = '/api/account/list';
        const body = {
            'fullname' : model.fullName,
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

    list(model: PersonProject) {
        const url = '/api/personproject/list';
        const body = {           
            'id': model.PersonProjectId,
            'code':'',
            'name':model.UsersName,
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

    insert(model: PersonProject) {
        const url = '/api/personproject/create';
        const body = {
            'UsersId' :model.UsersId,
            'ProjectId' : model.PersonProjectId,
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: PersonProject) {
        const url = '/api/personproject/update';
        const body = {
            'Id' :model.id,
            'UsersId' :model.UsersId,
            'ProjectId' : model.PersonProjectId,
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: PersonProject) {
        const url = '/api/PersonProject/Delete/' + model.id;
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);

    }
}
