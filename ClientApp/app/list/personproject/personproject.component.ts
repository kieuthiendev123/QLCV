import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { PersonProject, Account, Project } from '../../_models';
import { PersonProjectService, AccountService, ProjectService } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';

@Component({
    selector: 'app-personproject-a',
    templateUrl: './personproject.component.html'

})

export class PersonProjectComponent implements OnInit, AfterViewInit {
    public state_type = 'new';
    // load list data dự án 
    public list_du_an: Project;
    public list_data_duan: Array<Project> = [];

    // Declare variable search
    public obj_remove: PersonProject;
    public obj_edit: PersonProject;
    public obj_search: PersonProject;
    public list_data: Array<PersonProject> = [];
    public list_status = [
        { id: 1, name: "Đang làm việc" },
        { id: 0, name: "Đã nghỉ việc" }
    ];
    public list_permission = [
        { id: 1, name: "Admin" },
        { id: 2, name: "Test" },
        { id: 3, name: "Code" }
    ]
    public is_show_product = false;
    public tenduan = '';
    public load: PersonProject;
    public obj_search_duan: Project;


    // user 
    public obj_search_user: Account;
    public list_users: Array<Account> = [];
    public list_data_users: Array<Account> = [];
    public listNcDuocChon = [];
    public listNcThayThe = [];
    public rowUser: Account;

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
        theme: 'material',

    };

    constructor(private dataService: PersonProjectService, private AccountService: AccountService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
        this._document.title = 'Danh mục dự án';
        this.toastyConfig.theme = 'material';
        this.list_status;
        this.list_permission;
    }

    public ngOnInit() {
        this.obj_remove = new PersonProject();
        this.obj_edit = new PersonProject();
        this.obj_search = new PersonProject();
        this.list_du_an = new Project();
        this.load = new PersonProject();
        this.obj_search_user = new Account();
        this.obj_search_duan = new Project();



        this.loadListDuAn();
        this.listDataUsers();
    }
    ngAfterViewInit() {
    }
    loadNvDuAn(rows) {
        this.is_show_product = true;
        this.load.PersonProjectId = rows.id;
        this.tenduan = rows.nameProject;
        this.list();
    }
    search(event) {
        this.load;
        this.load.UsersName = event.target.value;
        this.list();
    }
    list() {
        this.dataService.list(this.load).subscribe(data => {
            this.list_data = data.data;
        });
    }
    searchNguoiDuAn(event) {
        this.obj_search_user.fullName = event.target.value;
        this.listDataUsers();
    }
    listDataUsers() {
        this.dataService.listDataUsers(this.obj_search_user).subscribe(data => {
            this.list_users = data.data;
            this.list_data_users = data.data;
        });
    }
    // add vào bảng thêm nhân viên vào dự án
    loadInfoUser(row) {
        console.log(row);
        this.listNcDuocChon.push(row);
    }
    delteleInfoUser(row) {
        this.listNcDuocChon;
        let index = this.listNcDuocChon.indexOf(row);
        console.log(index);
        if (index > -1) {
            this.listNcDuocChon.splice(index, 1);
        }
    }
    // upload nhân viên
    updateInfoUser(row) {
        this.listNcThayThe;
        this.rowUser = row;
        if (this.listNcThayThe = []) {
            this.listNcThayThe.push(row);
        }
    }
    delteleRowUser(row) {
        this.listNcThayThe;
        let index = this.listNcThayThe.indexOf(row);
        console.log(index);
        if (index > -1) {
            this.listNcThayThe.splice(index, 1);
        }
    }
    // seach dự án trong bảng dự án
    searchDuAn(event) {
        if (event.keyCode === 13) {
            console.log(event.target.value);
            this.list_du_an.nameProject = event.target.value;
            this.loadListDuAn();
            console.log(this.list_data_duan);
        }

    }
    // load list dự án
    loadListDuAn() {
        this.dataService.listDuAn(this.list_du_an).subscribe(data => {
            this.list_data_duan = data.data;
        });
    }


    addData() {
        this.state_type = 'new';
        this.obj_edit = new PersonProject();
        this.load;
        this.listNcDuocChon;
        this.listDataUsers();
        this.list_data_users;
        this.modal.open();
        this.form1.resetForm();

    }

    editData(item: PersonProject) {
        this.state_type = 'edit';
        this.obj_edit = item;
        this.load;
        this.listNcThayThe;
        console.log(this.load);
        this.modal.open();
    }
    saveData() {
        this.load;
        this.listNcDuocChon;
        this.list_data_users;
        this.rowUser;
        if (this.state_type === 'new') {
            for (let i = 0; i < this.listNcDuocChon.length; i++) {
                this.obj_edit.UsersId = this.listNcDuocChon[i].id;
                this.obj_edit.PersonProjectId = this.load.PersonProjectId;
                // for(let a = 0; a <this.list_data_users.length;a++){
                //    if(this.obj_edit.UsersId != this.list_data_users[a].id){
                        this.dataService.insert(this.obj_edit).subscribe(() => {
                            this.toastOptions.msg = 'Thêm mới dữ liệu thành công!';
                            this.toastyService.success(this.toastOptions);
                            this.cancelSave();
                            this.list();
                        }, () => {
                            this.toastOptions.msg = 'Thêm mới dữ liệu không thành công!';
                            this.toastyService.warning(this.toastOptions);
                            this.cancelSave();
                            this.list();
                        })
                    // }
                // } 
            }

        } else if (this.state_type === 'edit') {
                this.obj_edit;
                this.load;
                console.log(this.obj_edit);
                this.obj_edit.UsersId = this.rowUser.id;
                this.obj_edit.PersonProjectId = this.load.PersonProjectId;
                this.obj_edit.PersonProjectId = this.load.PersonProjectId;
                this.dataService.update(this.obj_edit).subscribe(() => {
                    this.toastOptions.msg = 'Sửa dữ liệu thành công!';
                    this.toastyService.success(this.toastOptions);
                    this.cancelSave();
                    this.list();
                }, () => {
                    this.toastOptions.msg = 'Sửa dữ liệu không thành công!';
                    this.toastyService.warning(this.toastOptions);
                    this.cancelSave();
                    this.list();
                })
            
        }
    }

    cancelSave() {
        this.state_type = 'new';
        this.obj_search = new PersonProject();
        this.obj_edit = new PersonProject();
        this.form1.resetForm();
        this.modal.dismiss();
        this.list();
        this.listNcDuocChon = [];
    }

    public deleteRow(item: PersonProject): void {
        this.obj_remove = item;
        console.log(this.obj_remove);
        this.confirmdeletemodal.open();
    }

    public removeOK() {
        this.dataService.delete(this.obj_remove).subscribe(data => {
            this.toastOptions.msg = 'Xóa dữ liệu thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new PersonProject();
            this.list();
        }, error => {
            this.toastOptions.msg = 'Xóa dữ liệu không thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new PersonProject();
            this.list();
        });
        this.confirmdeletemodal.dismiss();
    }
}
