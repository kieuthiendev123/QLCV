import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppsSettings';
import 'rxjs/add/operator/map';

import { ProjectTask, Project, OtherList } from '../_models/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProjectTaskService {
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

    list(model: ProjectTask) {
        const url = '/api/CongViec/List';
        const body = {
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
    listDetail(model: ProjectTask) {
        const url = '/api/CongViec/List';
        const body = {
            'Id': model.id,
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
    listStatus() {
        const url = '/api/CongViec/List';
        const body = {
            'status': 0,
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
    listProject(model: Project) {
       const url = '/api/Project/List';
       const body = {
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
    listSprint(model: ProjectTask) {
        const url = '/api/CongViec/ListSprint';
        const body = {
            'Id_Project': model.idDuAn,
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
    listStatus00(model: ProjectTask) {
        const url = '/api/CongViec/List';
        const body = {
            'Id_Sprint':model.idSprint,
            'Id_Project':model.idDuAn,
            'status':0,
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
    listStatus11(model: ProjectTask) {
        const url = '/api/CongViec/List';
        const body = {
            'Id_Sprint':model.idSprint,
            'Id_Project':model.idDuAn,
            'status': 1,
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
    listStatus0() {
        const url = '/api/CongViec/List';
        const body = {
            'status': 0,
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
    listStatus1() {
        const url = '/api/CongViec/List';
        const body = {
            'status': 1,
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
   
    listMucDo(model: OtherList)
    {
        const url = '/api/OtherList/ListMucDo';
        const body = {
            'id': 2,
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
    listStatus2() {
        const url = '/api/CongViec/List';
        const body = {
            'status': 2,
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
    listStatus3() {
        const url = '/api/CongViec/List';
        const body = {
            'status': 3,
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
    listStatus4() {
        const url = '/api/CongViec/List';
        const body = {
            'status': 4,
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
    get(model: ProjectTask) {
        const url = '/api/CongViec/Get';
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

    insert(model: ProjectTask) {
        const url = '/api/CongViec/Create';
        const body = {
            'idDuAn': model.idDuAn,
            'idSprint': model.idSprint,
            'nameCV': model.nameCV,
            'codeCV': model.codeCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'pStatus': model.pStatus,
            'levelTask': model.levelTask,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'Status' : model.pStatus

        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }
    
    update(model: ProjectTask) {
        const url = '/api/CongViec/update';
        const body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'idSprint':model.idSprint,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'pStatus': model.pStatus,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }
    TaskUnassigned(model: ProjectTask)
    {
        const url = '/api/CongViec/update';
        const body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'idSprint': model.idSprint,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'pStatus': 0,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }
   TaskAssigned(model: ProjectTask)
    {
        const url = '/api/CongViec/update';
        const body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'idSprint': model.idSprint,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'pStatus': 1,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'Status' : model.pStatus
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }
    ChangeStatus(model: ProjectTask) {
        const url = '/api/CongViec/ChangeStatus';
        const body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'pStatus' : 0
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }
    ChangeStatusOne(model: ProjectTask) {
        const url = '/api/CongViec/ChangeStatusOne';
        const body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'pStatus' : 1
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }
    ChangeStatusTwo(model: ProjectTask) {
        const url = '/api/CongViec/ChangeStatusTwo';
        const body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'pStatus' : 2
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }
    ChangeStatusThree(model: ProjectTask) {
        const url = '/api/CongViec/ChangeStatusThree';
        const body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'pStatus' : 3
        };
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    }
    delete(model: ProjectTask) {
        const url = 'api/CongViec/delete/' + model.id.toString();
        const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);

    }
}