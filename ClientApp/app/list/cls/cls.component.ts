import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { CanLamSang } from '../../_models';
import { CLSService } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';

@Component({
    selector: 'app-list-cls',
    templateUrl: './cls.component.html'
})
export class ListCLSComponent implements OnInit, AfterViewInit {
    public state_type = 'new';
    // Declare variable search
    public obj_remove: CanLamSang;
    public obj_edit: CanLamSang;
    public obj_search: CanLamSang;
    public list_data: Array<CanLamSang> = [];
    public list_parent: Array<CanLamSang> = [];
    @ViewChild('modalForm')
    form1: NgForm;
    @ViewChild('modal1')
    modal: BsModalComponent;
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

    constructor(private dataService: CLSService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService) {
        this._document.title = 'Danh sách Khám CLS';
    }
    public ngOnInit() {
        this.obj_remove = new CanLamSang();
        this.obj_edit = new CanLamSang();
        this.obj_search = new CanLamSang();
        this.loadList();
    }
    ngAfterViewInit() {
    }

    search() {
        this.loadList();
    }

    loadList() {
        this.dataService.list(this.obj_search).subscribe(data => {
            this.list_data = data.data;
        });
    }
    
    loadListCombo() {
        const combo_search = new CanLamSang();
        this.dataService.list(combo_search).subscribe(data => {
            this.list_parent = data.data;
        });
    }

    addData() {
        this.state_type = 'new';
        this.obj_edit = new CanLamSang();
        this.loadListCombo();
        this.modal.open();
        this.form1.resetForm();
    }

    editData(item: CanLamSang) {
        this.state_type = 'edit';
        this.loadListCombo();
        this.obj_edit = item;
        this.modal.open();
    }

    saveData() {
        if (this.state_type === 'new') {
            this.dataService.insert(this.obj_edit).subscribe(() => {
                this.toastOptions.msg = 'Thêm mới dữ liệu thành công!';
                this.toastyService.success(this.toastOptions);
                this.cancelSave();
            }, () => {
                this.toastOptions.msg = 'Thêm mới dữ liệu không thành công!';
                this.toastyService.warning(this.toastOptions);
                this.cancelSave();
            })
        } else if (this.state_type === 'edit') {
            this.dataService.update(this.obj_edit).subscribe(() => {
                this.toastOptions.msg = 'Sửa dữ liệu thành công!';
                this.toastyService.success(this.toastOptions);
                this.cancelSave();
            }, () => {
                this.toastOptions.msg = 'Sửa dữ liệu không thành công!';
                this.toastyService.warning(this.toastOptions);
                this.cancelSave();
            })
        }
    }

    cancelSave() {
        this.state_type = 'new';
        this.obj_search = new CanLamSang();
        this.obj_edit = new CanLamSang();
        this.form1.resetForm();
        this.modal.dismiss();
        this.loadList();
    }

    public deleteRow(item: CanLamSang): void {
        this.obj_remove = item;
        this.confirmdeletemodal.open();
    }

    public removeOK() {
        this.dataService.delete(this.obj_remove).subscribe(data => {
            this.toastOptions.msg = 'Xóa dữ liệu thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new CanLamSang();
            this.loadList();
        }, error => {
            this.toastOptions.msg = 'Xóa dữ liệu không thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new CanLamSang();
            this.loadList();
        });
        this.confirmdeletemodal.dismiss();
    }
}
