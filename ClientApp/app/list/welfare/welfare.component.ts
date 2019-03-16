import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { WelfareService } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
import { Welfare } from '../../_models/welfare';

@Component({
    selector: 'app-list-welfare',
    templateUrl: './welfare.component.html'
})
export class ListWelfareComponent implements OnInit, AfterViewInit {
    public state_type = 'new';
    // Declare variable search
    public obj_remove: Welfare;
    public obj_edit: Welfare;
    public obj_search: Welfare;
    public list_data: Array<Welfare> = [];
    public list_search_room: Array<Welfare> = [];
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

    constructor(private dataService: WelfareService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService) {
        this._document.title = 'Danh sách phúc lợi';
    }
    public ngOnInit() {
        this.obj_remove = new Welfare();
        this.obj_edit = new Welfare();
        this.obj_search = new Welfare();
        this.loadList();
    }
    ngAfterViewInit() {
    }

    // search() {
    //     this.loadList();
    // }
    showSearchListRoom(event) {
      // console.log(event.target.value);
      if(event.target.value != null){
        this.list_data = [];
         // kiểm tra độ dài của ô search > 0 thì bđ tìm kiếm
        // if (this.customer_order && this.customer_order.name_customer && this.customer_order.name_customer.length > 0) {
        if(event.target.value.length > 0){
          for (let i = 0; i < this.list_search_room.length; i++) {
            if (this.list_search_room[i].name.indexOf(event.target.value) > -1 || this.list_search_room[i].name.match(/\b\w/g).join('').indexOf(event.target.value) > -1) {
              this.list_data.push(this.list_search_room[i]);
              // console.log(this.list_data);
            }
          }
          // Còn không gán giá trị về mảng ban đầu và tắt ô tìm kiếm
        }else{
          this.list_data = this.list_search_room;
        }
      }
    }

    loadList() {
        this.dataService.list(this.obj_search).subscribe(data => {
            this.list_data = data.data;
            // đua dữ liệu từ sql vào mảng list_search_room
            this.list_search_room = data.data;
        });
    }

    addData() {
        this.state_type = 'new';
        this.obj_edit = new Welfare();
        this.modal.open();
        this.form1.resetForm();
    }

    editData(item: Welfare) {
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
        this.obj_search = new Welfare();
        this.obj_edit = new Welfare();
        this.form1.resetForm();
        this.modal.dismiss();
        this.loadList();
    }

    public deleteRow(item: Welfare): void {
        this.obj_remove = item;
        this.confirmdeletemodal.open();
    }

    public removeOK() {
        this.dataService.delete(this.obj_remove).subscribe(data => {
            this.toastOptions.msg = 'Xóa dữ liệu thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new Welfare();
            this.loadList();
        }, error => {
            this.toastOptions.msg = 'Xóa dữ liệu không thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new Welfare();
            this.loadList();
        });
        this.confirmdeletemodal.dismiss();
    }
}
