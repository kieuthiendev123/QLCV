import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { Sprint } from '../../_models';
import { SprintService } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
import { Project, Account } from '../../_models';
import { ProjectService,AccountService } from '../../_services';

@Component({
  selector: 'app-list-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit, AfterViewInit {
  public state_type = 'new';
  // Declare variable search
 
  public obj_remove: Sprint;
  public obj_edit: Sprint;
  public obj_search: Sprint;
  public obj_search_project: Project;
  public  dateStart: Date;
  public  endDate: Date;
  public  timeExtension: Date;
  public list_status:any;

  public list_data: Array<Sprint> = [];
  public list_Project: Array<Project> = [];
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

  constructor(private dataService: SprintService,private ProjectService: ProjectService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
      this._document.title = 'Danh sách các bước';
      this.toastyConfig.theme = 'material';
  }
  public ngOnInit() {
      this.obj_remove = new Sprint();
      this.obj_edit = new Sprint();
      this.obj_search = new Sprint();
      this.loadList();
      this.list_status =
      [
          {'id':1,'name':'Đang Hoạt Động'},
          {'id':2,'name':'Đóng'},
      ]
      
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
      this.dataService.getListProject().subscribe(data => {
        this.list_Project = data.data;
    });
  }

  addData() {
      this.state_type = 'new';
      this.obj_edit = new Sprint();
      this.modal.open();
      this.form1.resetForm();
  }

  editData(item: Sprint) {
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
      this.obj_search = new Sprint();
      this.obj_edit = new Sprint();
      this.form1.resetForm();
      this.modal.dismiss();
      this.loadList();
  }

  public deleteRow(item: Sprint): void {
      this.obj_remove = item;
      this.confirmdeletemodal.open();
  }

  public removeOK() {
      this.dataService.delete(this.obj_remove).subscribe(data => {
          this.toastOptions.msg = 'Xóa dữ liệu thành công!';
          this.toastyService.success(this.toastOptions);
          this.obj_remove = new Sprint();
          this.loadList();
      }, error => {
          this.toastOptions.msg = 'Xóa dữ liệu không thành công!';
          this.toastyService.success(this.toastOptions);
          this.obj_remove = new Sprint();
          this.loadList();
      });
      this.confirmdeletemodal.dismiss();
  }
}