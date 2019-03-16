import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { OtherList, OtherListType } from '../../_models';
import { OtherListService } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';

@Component({
    selector: 'app-list-otherlist',
    templateUrl: './otherlist.component.html',
    styleUrls: ['./otherlist.component.scss']
})
export class OtherlistComponent implements OnInit {
    public state_type = 'new';
    // Declare variable search
    public obj_remove: OtherList;
    public obj_edit: OtherList = new OtherList();
    public obj_search: OtherList;
    public list_data: Array<OtherList> = [];
    public list_parent: Array<OtherList> = [];
    public list_OtherListType: Array<OtherListType> = [];
    public obj_OtherListType: OtherListType;
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

    constructor(private dataService: OtherListService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService) {
        this._document.title = 'Danh mục dùng chung';
    }
    public ngOnInit() {
        this.obj_remove = new OtherList();
        this.obj_edit = new OtherList();
        this.obj_search = new OtherList();
        this.obj_OtherListType = new OtherListType();
        this.loadList();
        this.loadListOtherListType();
    }
    ngAfterViewInit() {
    }

    search() {
        this.loadList();
    }
    loadListOtherListType() {
        this.dataService.listOtherListType(this.obj_search).subscribe(data => {
            this.list_OtherListType = data.data;
        });
    }
    loadList() {
        this.dataService.list(this.obj_search).subscribe(data => {
            this.list_data = data.data;
        });
    }

    loadListCombo() {
        const combo_search = new OtherList();
        this.dataService.list(combo_search).subscribe(data => {
            this.list_parent = data.data;
        });
    }

    addData() {
        this.state_type = 'new';
        this.obj_edit = new OtherList();
        console.log(this.obj_edit);
        this.loadListCombo();
        this.modal.open();
        this.form1.resetForm();
    }

    editData(item: OtherList) {
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

    onChange(data) {
        this.obj_edit.typeId = data;
    }

    cancelSave() {
        this.state_type = 'new';
        this.obj_search = new OtherList();
        this.obj_edit = new OtherList();
        this.form1.resetForm();
        this.modal.dismiss();
        this.loadList();
    }

    public deleteRow(item: OtherList): void {
        this.obj_remove = item;
        this.confirmdeletemodal.open();
    }

    public removeOK() {
        this.dataService.delete(this.obj_remove).subscribe(data => {
            this.toastOptions.msg = 'Xóa dữ liệu thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new OtherList();
            this.loadList();
        }, error => {
            this.toastOptions.msg = 'Xóa dữ liệu không thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new OtherList();
            this.loadList();
        });
        this.confirmdeletemodal.dismiss();
    }

}
