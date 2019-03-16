import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { Sprint,Project, ProjectTask } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SprintService {
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
    list(model: Sprint) {
        const url = '/api/Sprint/List';
        const body = {
            'Id_Project': model.idProject,
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
    getListSprint(model: ProjectTask) {
        const url = '/api/CongViec/ListSprint';
        const body = {
            'Id_Project': model.idDuAn,
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
    getListProject(){
        const url = '/api/Project/List';
        const body = {
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
    get(model: Sprint) {
        const url = '/api/Sprint/Get';
        const body = {
            'Id': model.Id,
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    insert(model: Sprint) {
        const url = '/api/Sprint/Create';
        const body = {
            'idProject': model.idProject,
            'nameSprint': model.nameSprint,
            'startDate': model.startDate,
            'endDate': model.endDate,
            'timeExtension': model.timeExtension,
            'statusSprint': model.statusSprint,
            'Note': model.note,
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: Sprint) {
        const url = '/api/Sprint/Update';
        const body = {
            'Id': model.Id,
            'idProject': model.idProject,
            'nameSprint': model.nameSprint, 
            'startDate': model.startDate,
            'endDate': model.endDate,
            'timeExtension': model.timeExtension,
            'statusSprint': model.statusSprint,
            'Note': model.note,
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: Sprint) {
        const url = '/api/Comment/delete/' + model.Id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    }
}

