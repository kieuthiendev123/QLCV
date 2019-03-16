import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { ProjectTask, Project, OtherList } from '../../_models';
import { ProjectTaskService,ProjectService } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';

@Component({
  selector: 'app-list-projecttask',
  templateUrl: './projecttask.component.html',
  styleUrls: ['./projecttask.component.scss']
})
export class ProjecttaskComponent implements OnInit, AfterViewInit {
  public state_type = 'new';
  // Declare variable search
  public obj_remove: ProjectTask;
  public obj_edit: ProjectTask;
  public obj_search: ProjectTask;
  public obj_search_project: Project;
  public obj_search_ot: OtherList;
  public list_data: Array<ProjectTask> = [];
  public list_project: Array<Project> = [];
  public list_mucDo:Array<OtherList> = [];
  public list_ngTaoViec: any;
  public list_ngGanViec: any;
  public list_duAn:any;
  public list_status:any;
  public list_sprint:any;
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

  constructor(private dataService: ProjectTaskService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
      this._document.title = 'Danh sách công việc';
      this.toastyConfig.theme = 'material';
  }
  public ngOnInit() {
      this.obj_remove = new ProjectTask();
      this.obj_edit = new ProjectTask();
      this.obj_search = new ProjectTask();
      this.loadList();
      this.list_ngTaoViec = [
        {id:1,name:"Phạm Tuấn Anh"},
        {id:2,name:"Mai Thành Luân"}
      ];
      this.list_status= [
        {id:0,name:"Unassigned"},
        {id:1,name:"To Do"},
        {id:2,name:"In Process"},
        {id:3,name:"Test"},
        {id:4,name:"Done"}
      ];
      this.list_ngGanViec = [
        {id:1,name:"Mạnh Hùng"},
        {id:2,name:"Kiều Đình Thiện"},
        {id:3,name:"Trần Tú"},
        {id:4,name:"Hà Ngốc Nghếch"},
        {id:5,name:"Hoàng Xuân"}
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
      this.dataService.listProject(this.obj_search_project).subscribe(data => {
        this.list_project = data.data;
    });
    this.dataService.listMucDo(this.obj_search_ot).subscribe(data => {
        this.list_mucDo = data.data;
    });
  }
  CheckProject()
  {
      this.dataService.listSprint(this.obj_edit).subscribe(data => {
        this.list_sprint = data.data;
    });
  }
  addData() {
      this.state_type = 'new';
      this.obj_edit = new ProjectTask();
      this.modal.open();
      this.form1.resetForm();
  }
  editData(item: ProjectTask) {
      this.state_type = 'edit';
      this.obj_edit = item;
      this.CheckProject();
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
      this.obj_search = new ProjectTask();
      this.obj_edit = new ProjectTask();
      this.form1.resetForm();
      this.modal.dismiss();
      this.loadList();
  }

  public deleteRow(item: ProjectTask): void {
      this.obj_remove = item;
      this.confirmdeletemodal.open();
  }

  public removeOK() {
      this.dataService.delete(this.obj_remove).subscribe(data => {
          this.toastOptions.msg = 'Xóa dữ liệu thành công!';
          this.toastyService.success(this.toastOptions);
          this.obj_remove = new ProjectTask();
          this.loadList();
      }, error => {
          this.toastOptions.msg = 'Xóa dữ liệu không thành công!';
          this.toastyService.success(this.toastOptions);
          this.obj_remove = new ProjectTask();
          this.loadList();
      });
      this.confirmdeletemodal.dismiss();
  }
}
