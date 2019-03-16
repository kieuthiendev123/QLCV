import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { Project, Account } from '../../_models';
import { ProjectService,AccountService } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';

@Component({
    selector: 'app-project-a',
    templateUrl: './project.component.html'
    
})

export class ProjectComponent implements OnInit, AfterViewInit {
    public state_type = 'new';
    // Declare variable search
    public obj_remove: Project;
    public obj_edit: Project;
    public obj_search: Project;
    public list_data: Array<Project> = [];
    public list_account: Array<Account> = [];
   
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

    constructor(private dataService: ProjectService, private AccountService: AccountService,@Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
        this._document.title = 'Danh mục dự án';
        this.toastyConfig.theme = 'material';
    }

    public ngOnInit() {
        this.obj_remove = new Project();
        this.obj_edit = new Project();
        this.obj_search = new Project();
        this.loadList();
    }
    ngAfterViewInit() {
    }

    loadComboBox() {
        const search_room: Account = new Account();
        this.AccountService.list(search_room).subscribe(data => {
            this.list_account = data.data;
        });
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
        this.obj_edit = new Project();
        this.loadComboBox();
        this.modal.open();
        this.form1.resetForm();
    }

    editData(item: Project) {
        this.state_type = 'edit';
        this.obj_edit = item;
        this.loadComboBox();
        this.modal.open();
    }
    onChangDateTime(){
        
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
        this.obj_search = new Project();
        this.obj_edit = new Project();
        this.form1.resetForm();
        this.modal.dismiss();
        this.loadList();
    }

    public deleteRow(item: Project): void {
        this.obj_remove = item;
        this.confirmdeletemodal.open();
    }

    public removeOK() {
        this.dataService.delete(this.obj_remove).subscribe(data => {
            this.toastOptions.msg = 'Xóa dữ liệu thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new Project();
            this.loadList();
        }, error => {
            this.toastOptions.msg = 'Xóa dữ liệu không thành công!';
            this.toastyService.success(this.toastOptions);
            this.obj_remove = new Project();
            this.loadList();
        });
        this.confirmdeletemodal.dismiss();
    }
}
