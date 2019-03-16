import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { Patients, PatientsVoucher } from '../../_models';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService, AccountantService } from '../../_services/index';

@Component({
    selector: 'app-cashflow-waiting',
    templateUrl: './waiting.component.html'
})
export class CashFlowWaitingComponent implements OnInit, AfterViewInit {
    public state_type = 'new';
    // Declare variable search
    public obj_edit: PatientsVoucher;
    public obj_search: PatientsVoucher;
    public list_data: Array<PatientsVoucher> = [];
    public list_dot_kham: Array<PatientsVoucher> = [];
    @ViewChild('detailpatients')
    detailpatients: BsModalComponent;
    @ViewChild('paymentvoucher')
    paymentvoucher: BsModalComponent;
    @ViewChild('finishpayment')
    finishpayment: BsModalComponent;

    // Toast Option
    public toastOptions: ToastOptions = {
        title: '',
        msg: '',
        showClose: true,
        timeout: 5000,
        theme: 'default'
    };

    constructor(private dataService: AccountantService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private toastyConfig: ToastyConfig, private route: Router) {
        this._document.title = 'Danh sách chờ thanh toán';
        this.toastyConfig.theme = 'material';
    }
    public ngOnInit() {
        this.obj_edit = new PatientsVoucher();
        this.obj_search = new PatientsVoucher();
        this.loadList();
    }
    ngAfterViewInit() {
    }

    search() {
        this.loadList();
    }

    loadList() {
        this.dataService.list(new PatientsVoucher()).subscribe(data => {
            this.list_data = data.data;
        });
    }

    paymentVoucher(item: PatientsVoucher) {
        this.obj_edit = item;
        this.list_dot_kham = [];
        this.list_dot_kham.push(item);
        this.paymentvoucher.open('lg');
    }

    detailPatients(item: PatientsVoucher) {
        this.obj_edit = item;
        this.detailpatients.open('lg');
    }

    acceptpayment() {
        this.paymentvoucher.dismiss();
        this.finishpayment.open();
    }

    finishPayment() {
        this.dataService.paymentCashflow(this.obj_edit.id).subscribe(data => {
            this.finishpayment.dismiss();
            this.toastOptions.msg = 'Thanh toán thành công';
            this.toastyService.success(this.toastOptions);
            this.loadList();
        });
    }

    getRowHeight(row) {
        if (!row || (row && !row.services) || (row && row.services && row.services.length < 1)) {
            return 40;
        } else {
            return 80 + ((row.services.length - 1) * 20);
        }
    }

    getSumPrice(services: Array<any>) {
        let sum = 0;
        for (let i = 0; i < services.length; i++) {
            sum += services[i].price;
        }
        return sum;
    }
}
