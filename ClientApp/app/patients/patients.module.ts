import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalModule } from 'ng2-bs3-modal';

import { PatientsEditComponent, PatientsListComponent } from './index';
import { PatientsRoutes } from './patients.routing';
import { ExamService, FeeService, RoomService } from '../_services/index';

@NgModule({
    imports: [
        RouterModule.forChild(PatientsRoutes),
        CommonModule,
        FormsModule,
        NgxDatatableModule,
        BsModalModule,
        ToastyModule.forRoot()
    ],
    declarations: [PatientsEditComponent, PatientsListComponent],
    providers: [
        ExamService,
        FeeService,
        RoomService
    ]
})

export class PatientsModule { }
