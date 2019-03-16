import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { Exam } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ExamService {
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

    listAll(model: Exam) {
        const url = '/api/medicalExamination/listall';
        const body = {
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

    listByDoctor(model: Exam) {
        const url = '/api/medicalExamination/listByDocter';
        const body = {
            'code': model.code,
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

    get(model: Exam) {
        const url = '/api/medicalExamination/get' + '?id=' + model.id;
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.get(url, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    call(id: number) {
        const url = '/api/medicalExamination/call';
        const body = {
            'id': id
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    insert(model: Exam) {
        const url = '/api/MedicalExamination/Create';
        const body = {
            'fullName': model.fullName,
            'address' : model.address,
            'gender': model.gender,
            'birthYear': model.birthYear,
            'EffectDate': model.EffectDate,
            'phone': model.phone,
            'city': model.city,
            'district': model.district,
            'ward': model.ward,
            'insCode': model.insCode,
            'insStartDate': model.insStartDate,
            'hospitalRegis': model.hospitalRegis,
            'insInputCard': model.insStartDate,
            'insEndDate': model.insEndDate,
            'dayOfExamination': new Date(),
            'feeId': model.feeId,
            'roomId': model.roomId,
            'reason': model.reason
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        console.log(options);
        return this.http.post(url, body, options);
    }

    update(model: Exam) {
        const url = '/api/MedicalExamination/Update';
        const body = {
            'id': model.id,
            'fullName': model.fullName,
            'gender': model.gender,
            'birthYear': model.birthYear,
            'EffectDate': model.EffectDate,
            'phone': model.phone,
            'city?': model.city,
            'district': model.district,
            'ward': model.ward,
            'insCode?': model.insCode,
            'insStartDate?': model.insStartDate,
            'insEndDate?': model.insEndDate,
            'dayOfExamination': new Date(),
            'feeId': model.feeId,
            'roomId': model.roomId,
            'Reason': model.reason
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        console.log(body);
        return this.http.post(url, body, options);
    }

    delete(model: Exam) {
        const url = '/api/medicalExamination/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    }
}
