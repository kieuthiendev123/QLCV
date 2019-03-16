import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { Account,OtherList } from '../../_models';
import { AccountService,  } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';

@Component({
    selector: 'app-system-account',
    templateUrl: './account.component.html'
})
export class SystemAccountComponent implements OnInit, AfterViewInit {
    public state_type = 'new';
    // Declare variable search
    public obj_remove: Account;
    public obj_edit: Account;
    public obj_other : OtherList;
    public list_chucdanh : Array<OtherList>=[];
    public obj_search: Account;
    public list_data: Array<Account> = [];
    // public list_room: Array<Room> = [];
    public list_status : Array<any>=[];
    public list_otherlist : Array<any>=[];
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

    constructor(private dataService: AccountService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
        this._document.title = 'Quản lý thông tin nhân viên';
        this.toastyConfig.theme = 'material';
    }

    public ngOnInit() {
        this.obj_remove = new Account();
        this.obj_edit = new Account();
        this.obj_search = new Account();
        this.obj_other = new OtherList();
        this.loadList();
        this.loadListOther();
        this.list_status = [
            {id:1,name:"Đang Làm Việc"},
            {id:0,name:"Đã Nghỉ Việc"}
          ];

    }
    ngAfterViewInit() {
    }

    loadComboBox() {
        // const search_room: Room = new Room();
        // this.roomService.list(search_room).subscribe(data => {
        //     this.list_room = data.data;
        // });
    }
    // search(event) {
    //     this.obj_search.fullName = event.target.value;
    //     this.loadList();
    // }
    search(event) {
        if (event.keyCode === 13) {
            console.log(event.target.value);
            this.obj_search.fullName = event.target.value;
            this.loadList();
            // console.log(this.list_data_duan);
        }

    }

    loadListOther(){
        this.dataService.listOther(this.obj_other).subscribe(data => {
            this.list_chucdanh = data.data;
        });
    }

    loadList() {
        this.dataService.list(this.obj_search).subscribe(data => {
            this.list_data = data.data;
            // console.log(this.list_data);
        });
    }

    addData() {
        this.state_type = 'new';
        this.obj_edit = new Account();
        // this.loadComboBox();
        this.modal.open();
        this.form1.resetForm();
    }

    editData(row) {
        this.state_type = 'edit';
        this.obj_edit = row;
        console.log(this.obj_edit);
        this.modal.open();; 
    }

    saveData() {
        if (this.state_type === 'new') {
            for(var a =0; a<this.list_chucdanh.length;a++){
                if(this.obj_edit.otherListId == this.list_chucdanh[a].id){
                    this.obj_edit.otherListName = this.list_chucdanh[a].name;
                }
            };
            this.obj_edit.status = 1;
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
            for(var a =0; a<this.list_chucdanh.length;a++){
                if(this.obj_edit.otherListId == this.list_chucdanh[a].id){
                    this.obj_edit.otherListName = this.list_chucdanh[a].name;
                }
            };
            console.log(this.obj_edit);
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
        this.obj_search = new Account();
        this.obj_edit = new Account();
        this.form1.resetForm();
        this.modal.dismiss();
        this.loadList();
    }

    public deleteRow(item: Account): void {
        this.obj_remove = item;
        this.confirmdeletemodal.open();
    }

    public removeOK() {
        this.dataService.delete(this.obj_remove).subscribe(data => {
            this.toastOptions.msg = 'Xóa dữ liệu thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new Account();
            this.loadList();
        }, error => {
            this.toastOptions.msg = 'Xóa dữ liệu không thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new Account();
            this.loadList();
        });
        this.confirmdeletemodal.dismiss();
    }
}
