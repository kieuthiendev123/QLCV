import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import * as Chartist from "chartist";
import { BsModalComponent, BsModalService } from "ng2-bs3-modal";
import { Exam } from "../../_models";
import { ExamService } from "../../_services";
declare var $: any;
import {
  ToastyService,
  ToastyConfig,
  ToastOptions,
  ToastData
} from "ng2-toasty";
import { NgForm } from "@angular/forms";
import { DOCUMENT } from "@angular/platform-browser";
import { Injectable, Inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-patients-list",
  templateUrl: "./list.component.html"
})
export class PatientsListComponent implements OnInit, AfterViewInit {
  public state_type = "new";
  // Declare variable search
  public obj_remove: Exam;
  public obj_edit: Exam;
  public obj_search: Exam;
  public list_data: Array<Exam> = [];
  public list_search_room: Array<Exam> = [];
  @ViewChild("modalForm") form1: NgForm;
  @ViewChild("confirmdeletemodal") confirmdeletemodal: BsModalComponent;

  // Toast Option
  public toastOptions: ToastOptions = {
    title: "",
    msg: "",
    showClose: true,
    timeout: 5000,
    theme: "default"
  };

  constructor(
    @Inject(DOCUMENT) private _document: any,
    private dataService: ExamService,
    private toastyService: ToastyService,
    private route: Router
  ) {
    this._document.title = "Danh sách chờ khám";
  }
  public ngOnInit() {
    this.obj_remove = new Exam();
    this.obj_edit = new Exam();
    this.obj_search = new Exam();
    this.loadList();
  }
  ngAfterViewInit() {}

  search() {
    this.loadList();
  }
  showSearchListRoom(event) {
    console.log(event.target.value);
    if(event.target.value != null){
      this.list_data = [];
       // kiểm tra độ dài của ô search > 0 thì bđ tìm kiếm
      // if (this.customer_order && this.customer_order.name_customer && this.customer_order.name_customer.length > 0) {
      if(event.target.value.length > 0){
        for (let i = 0; i < this.list_search_room.length; i++) {
          if (this.list_search_room[i].fullName.indexOf(event.target.value) > -1 || this.list_search_room[i].fullName.match(/\b\w/g).join('').indexOf(event.target.value) > -1) {
            this.list_data.push(this.list_search_room[i]);
            // console.log(this.list_data);
          }
          // console.log(this.list_search_room);
        }
        // Còn không gán giá trị về mảng ban đầu và tắt ô tìm kiếm
      }else{
        this.list_data = this.list_search_room;
      }
    }
  }

  loadList() {
    this.dataService.listAll(this.obj_search).subscribe(data => {
      this.list_data = data.data;
      this.list_search_room = data.data;
    });
  }

  addData() {
    this.route.navigate(["/store/patients/edit", "new"]);
  }

  editData(item: Exam) {
    this.route.navigate(["/store/patients/edit", item.id]);
  }

  cancelSave() {
    this.state_type = "new";
    this.obj_search = new Exam();
    this.obj_edit = new Exam();
    this.form1.resetForm();
    this.loadList();
  }

  public deleteRow(item: Exam): void {
    this.obj_remove = item;
    this.confirmdeletemodal.open();
    // console.log('hii');
  }

  public removeOK() {
    this.dataService.delete(this.obj_remove).subscribe(
      data => {
        this.toastOptions.msg = "Xóa dữ liệu thành công!";
        this.toastyService.success(this.toastOptions);
        this.obj_remove = new Exam();
        this.loadList();
      },
      error => {
        this.toastOptions.msg = "Xóa dữ liệu không thành công!";
        this.toastyService.success(this.toastOptions);
        this.obj_remove = new Exam();
        this.loadList();
      }
    );
    this.confirmdeletemodal.dismiss();
  }
}
