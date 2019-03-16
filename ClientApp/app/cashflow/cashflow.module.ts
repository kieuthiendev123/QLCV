import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalModule } from 'ng2-bs3-modal';

import { CashFlowPaymentComponent, CashFlowReceiveComponent, CashFlowWaitingComponent } from './index';
import { CashflowRoutes } from './cashflow.routing';
import { ExamService, AccountantService } from '../_services/index';

@NgModule({
    imports: [
        RouterModule.forChild(CashflowRoutes),
        CommonModule,
        FormsModule,
        NgxDatatableModule,
        BsModalModule,
        ToastyModule.forRoot()
    ],
    declarations: [CashFlowPaymentComponent, CashFlowReceiveComponent, CashFlowWaitingComponent],
    providers: [ExamService, AccountantService]
})

export class CashflowModule { }
