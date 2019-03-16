import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { Patients } from '../../_models';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-cls-list',
    templateUrl: './list.component.html'
})
export class CLSListComponent implements OnInit, AfterViewInit {
    public state_type = 'new';
    // Declare variable search
    public obj_remove: Patients;
    public obj_edit: Patients;
    public obj_search: Patients;
    public list_data: Array<Patients> = [];
    @ViewChild('modalForm')
    form1: NgForm;
    @ViewChild('confirmdeletemodal')
    confirmdeletemodal: BsModalComponent;

    // Toast Option
    public toastOptions: ToastOptions = {
        title: '',
        msg: '',
        showClose: true,
        timeout: 5000,
        theme: 'default'
    };

    constructor( @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private route: Router) {
        this._document.title = 'Danh sách chờ khám';
    }
    public ngOnInit() {
        this.obj_remove = new Patients();
        this.obj_edit = new Patients();
        this.obj_search = new Patients();
        this.loadList();
    }
    ngAfterViewInit() {
    }

    search() {
        this.loadList();
    }

    loadList() {
        this.list_data = [{
            id: 1,
            code: 'BN00001',
            name: 'Nguyễn Văn A',
            service: 'Răng miệng',
            room: 'Công việc số 3',
            waitTime: 15,
            status: 2
        }, {
            id: 2,
            code: 'BN00002',
            name: 'Nguyễn Văn B',
            service: 'Răng miệng',
            room: 'Công việc số 3',
            waitTime: 18,
            status: 3
        }, {
            id: 3,
            code: 'BN00003',
            name: 'Nguyễn Văn C',
            service: 'Răng miệng',
            room: 'Công việc số 3',
            waitTime: 20,
            status: 1
        }];
    }

    editData(item: Patients) {
        this.route.navigate(['/store/patients/edit', item.id]);
    }

    cancelSave() {
        this.state_type = 'new';
        this.obj_search = new Patients();
        this.obj_edit = new Patients();
        this.form1.resetForm();
        this.loadList();
    }

    public deleteRow(item: Patients): void {
        this.obj_remove = item;
        this.confirmdeletemodal.open();
    }

    public removeOK() {
        this.toastOptions.msg = 'Xóa dữ liệu thành công!';
        this.toastyService.success(this.toastOptions);
    }

    callKham(item: Patients) {
        this.route.navigate(['/store/cls/examination', item.id]);
    }
}
