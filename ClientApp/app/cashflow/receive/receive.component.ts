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
import { AccountantService } from '../../_services/index';

@Component({
    selector: 'app-receive-waiting',
    templateUrl: './receive.component.html'
})
export class CashFlowReceiveComponent implements OnInit, AfterViewInit {
    public state_type = 'new';
    // Declare variable search
    public obj_edit: PatientsVoucher;
    public obj_search: PatientsVoucher;
    public list_data: Array<PatientsVoucher> = [];
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

    constructor(private dataService: AccountantService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private route: Router) {
        this._document.title = 'Danh sách phiếu thu';
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
       this.dataService.listCashFlow(0).subscribe(data=>{
           this.list_data = data.data;
       });
    }

    paymentVoucher() {

    }

    detailPatients() {

    }

    finishPayment() {

    }
}
