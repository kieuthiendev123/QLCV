import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-doctor-examination',
    templateUrl: './examination.component.html',
    styleUrls: ['./examination.component.scss']
})
export class DoctorExaminationComponent implements OnInit, AfterViewInit {
    public step :  Number = 4;
    public step1: Number = 0;
    public step4: Number = 1;
    public step_thuoc: Number = 0;
    public list_cls: Array<any> = [];
    public list_cls_push: Array<any> = [];
    public arry_don_thuoc_co_san: Array<any> = [];
    public arry_thuoc_co_san: Array<any> = [];
    public list_ds_thuoc: Array<any> = [];
    public Arraydv: Array<any> = [];
    public state_type = "";
    public obj_edit :any;

    @ViewChild('modalForm')
    form1: NgForm;
    @ViewChild('modal1')
    modal: BsModalComponent;
    @ViewChild('confirmdeletemodal')
    confirmdeletemodal: BsModalComponent;
    @ViewChild('kedonchitiet')
    kedonchitiet: BsModalComponent;
    @ViewChild('kedonForm')
    kedonForm:NgForm;
    constructor() { }
    public ngOnInit() {
      this.list_cls =[
        {id:1,name:"Bệnh lý thần linh tự trị"},
        {id:2,name:"Đau nhức đầu đột ngột dữ dội"},
        {id:3,name:"U nguyên bào thần kinh"},
        {id:4,name:"Viêm túy ngang"},
        {id:5,name:"Đột quỵ (Stroke)"},
        {id:6,name:"Đau nhức đầu do viêm xoang"},
        {id:7,name:"Bệnh động kinh"}
      ];
      // console.log(this.list_cls);
      this.arry_don_thuoc_co_san =[
        {id:1,name:"Đơn cúm thường"},
        {id:2,name:"Đơn cúm gà"},
        {id:3,name:"Đơn cúm H5N1"},
        {id:4,name:"Đơn cúm nặng"},
      ];

      this.arry_thuoc_co_san = [
        {id:1,name:"Penicillin A 250mg"},
        {id:2,name:"Penicillin A 500mg"},
        {id:3,name:"Penicillin G"},
        {id:4,name:"Penicillin E"}
      ];

      this.list_ds_thuoc = [
        {id:1,name:'Penicillin G',sl:'2 Hộp',dv:'Hộp',ddg:'Viên',ll:'1 viên/lần',ts:'2 lần/ngày',tg:'10 ngày'},
        {id:2,name:'Chloxacillin 500mg',sl:'1 Vỉ',dv:'Vỉ',ddg:'Siro',ll:'2 viên/lần',ts:'2 lần/ngày',tg:'30 ngày'},
        {id:3,name:'Chlorotetracycline 250mg',sl:'2 Lọ',dv:'Lọ',ddg:'Gói',ll:'1 gói/lần',ts:'2 lần/ngày',tg:'30 ngày'}
      ];

      this.Arraydv = [{
        id: 1,
        name: 'Hộp'
    }, {
        id: 2,
        name: 'Vỉ'
    }, {
        id: 3,
        name: 'Lọ'
    }];
      this.obj_edit=[];
    };
    ngAfterViewInit() {
    }

    changeStep(step: Number) {
        this.step = step;
    }

    changeStep1(step1:Number){
      this.step1 = step1;
      // console.log(this.step1);
    }
    changeStep4(step4:Number){
      this.step4 = step4;
      // console.log(this.step4);
    }
    changeStepTimThuoc(step_thuoc:Number){
      this.step_thuoc = step_thuoc;
      // console.log(this.step4);
    }
    // click
    eventClick01(item){

      this.list_cls_push.push(item);
      console.log(this.list_cls_push)
    }
    addData() {
      this.state_type = 'new';
      // this.obj_edit = new Welfare();
      this.modal.open();
      console.log('hi');
      // this.form1.resetForm();
    }
    ke_don(row){
      this.kedonchitiet.open();
      this.obj_edit = row;
      console.log(row);
    }
    huy_ke_don(){
      this.kedonForm.resetForm();
      this.kedonchitiet.dismiss();
    }
    cancelSave() {
      this.state_type = 'new';
      // this.obj_search = new Welfare();
      // this.obj_edit = new Welfare();
      this.form1.resetForm();
      this.modal.dismiss();
      // this.loadList();
  }
  deleteRow1(){
    this.confirmdeletemodal.open();
  }
    deleteRow(item){
      this.list_cls_push;
      let index = this.list_cls_push.indexOf(item);
      console.log(index);
      if(index > -1){
        this.list_cls_push.splice(index,1);
      }
    }
}
