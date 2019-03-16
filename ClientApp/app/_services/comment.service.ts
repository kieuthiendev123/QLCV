import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { Comment } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommentService {
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

    list(model: Comment) {
        const url = '/api/Comment/List';
        const body = {
            'code': model.codeComment,
            'name': model.content,
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

    get(model: Comment) {
        const url = '/api/Comment/Get';
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

    insert(model: Comment) {
        const url = '/api/Comment/Create';
        const body = {
            'idPersonComment': model.idPersonComment,
            'content': model.content,
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    update(model: Comment) {
        const url = '/api/Comment/Update';
        const body = {
            'id': model.id,
            'idPersonComment': model.idPersonComment,
            'content': model.content
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }

    delete(model: Comment) {
        const url = '/api/Comment/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    }
}

