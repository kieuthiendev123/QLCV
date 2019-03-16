import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { Room } from '../../_models';
import { RoomService } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';

@Component({
    selector: 'app-list-room',
    templateUrl: './room.component.html'
})
export class ListRoomComponent implements OnInit, AfterViewInit {
    public state_type = 'new';
    // Declare variable search
    public obj_remove: Room;
    public obj_edit: Room;
    public obj_search: Room;
    public list_data: Array<Room> = [];
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
        theme: 'material'
    };

    constructor(private dataService: RoomService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
        this._document.title = 'Phần quyền dự án';
        this.toastyConfig.theme = 'material';
    }
    public ngOnInit() {
        this.obj_remove = new Room();
        this.obj_edit = new Room();
        this.obj_search = new Room();
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

    addData() {
        this.state_type = 'new';
        this.obj_edit = new Room();
        this.modal.open();
        this.form1.resetForm();
    }

    editData(item: Room) {
        this.state_type = 'edit';
        console.log(item);
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
        this.obj_search = new Room();
        this.obj_edit = new Room();
        this.form1.resetForm();
        this.modal.dismiss();
        this.loadList();
    }

    public deleteRow(item: Room): void {
        this.obj_remove = item;
        this.confirmdeletemodal.open();
    }

    public removeOK() {
        this.dataService.delete(this.obj_remove).subscribe(data => {
            this.toastOptions.msg = 'Xóa dữ liệu thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new Room();
            this.loadList();
        }, error => {
            this.toastOptions.msg = 'Xóa dữ liệu không thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new Room();
            this.loadList();
        });
        this.confirmdeletemodal.dismiss();
    }
}
