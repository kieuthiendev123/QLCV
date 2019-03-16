import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as Chartist from 'chartist';
import { Exam, Fee, Room } from '../../_models/index';
import { ExamService, FeeService, RoomService } from '../../_services/index';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-patients-edit',
    templateUrl: './edit.component.html'
})
export class PatientsEditComponent implements OnInit, AfterViewInit, OnDestroy {
    public model: Exam = new Exam();
    id: string;
    private sub: any;
    list_city: Array<any> = [];
    list_district: Array<any> = [];
    list_ward: Array<any> = [];
    list_gender: Array<any> = [];
    list_fee: Array<Fee> = [];
    list_room: Array<Room> = [];

    // Toast Option
    public toastOptions: ToastOptions = {
        title: '',
        msg: '',
        showClose: true,
        timeout: 5000,
        theme: 'material'
    };


    constructor(private route: Router,
        private activeRoute: ActivatedRoute,
        private dataService: ExamService,
        private feeService: FeeService,
        private roomService: RoomService,
        @Inject(DOCUMENT) private _document: any,
        private toastyService: ToastyService,
        private toastyConfig: ToastyConfig) {
        this._document.title = 'Tiếp đón bệnh nhân';
        this.toastyConfig.theme = 'material';
    }
    public ngOnInit() {
        this.sub = this.activeRoute.params.subscribe(params => {
            this.id = params['id'];
            if (this.id !== 'new') {
                const model_search: Exam = new Exam();
                model_search.id = +this.id;
                this.dataService.get(model_search).subscribe(data => {
                    // data.dayOfExamination = Date.parse(data.dayOfExamination);

                    // format ngay
                    var today = new Date(data.dayOfExamination).toJSON().slice(0,10).toLocaleString();
                    console.log(today);


                    data.dayOfExamination = today;
                    this.model = data;
                });
            }
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if ($(".selectpicker").length != 0) {
                console.log($(".selectpicker"));
                $(".selectpicker").selectpicker();
            }
        }, 1000);
        this.loadListCombo();
    }

    saveData() {
        this.dataService.insert(this.model).subscribe(data => {
            this.route.navigate(['/store/patients/list']);
            this.toastOptions.msg = 'Tiếp nhân bệnh nhân thành công!';
            this.toastyService.success(this.toastOptions);
        }, error => {
            this.toastOptions.msg = 'Tiếp nhân bệnh nhân không thành công!';
            this.toastyService.error(this.toastOptions);
        });
    }
    updateData(){
        this.dataService.update(this.model).subscribe(data =>{
          this.route.navigate(['/store/patients/list']);
          this.toastOptions.msg = 'Tiếp nhân bệnh nhân thành công!';
          this.toastyService.success(this.toastOptions);
        }, error =>{
          this.route.navigate(['/store/patients/list']);
          this.toastOptions.msg = 'Tiếp nhân bệnh nhân không thành công!';
          this.toastyService.error(this.toastOptions);
        })
    }
    cancelSave() {
        this.route.navigate(['/store/patients/list']);
    }

    loadListCombo() {
        this.list_gender = [{
            id: 1,
            name: 'Nam'
        }, {
            id: 2,
            name: 'Nữ'
        }, {
            id: 3,
            name: 'Không xác định'
        }];

        this.list_city = [{
            id: 1,
            name: 'Hà Nội'
        }, {
            id: 2,
            name: 'Hồ Chí Minh'
        }];

        this.list_district = [{
            id: 1,
            name: 'Hoàn Kiếm'
        }, {
            id: 2,
            name: 'Hai Bà Trưng'
        }];

        this.list_ward = [{
            id: 1,
            name: 'Hàng Bài'
        }, {
            id: 2,
            name: 'Hàng Mã'
        }];

        this.roomService.list(new Room()).subscribe(data => {
            this.list_room = data.data;
        });

        this.feeService.list(new Fee()).subscribe(data => {
            this.list_fee = data.data;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
