import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalModule } from 'ng2-bs3-modal';

import { DoctorListComponent, DoctorExaminationComponent } from './index';
import { DoctorRoutes } from './doctor.routing';
import { DoctorService } from '../_services';

@NgModule({
    imports: [
        RouterModule.forChild(DoctorRoutes),
        CommonModule,
        FormsModule,
        NgxDatatableModule,
        BsModalModule,
        ToastyModule.forRoot()
    ],
    declarations: [DoctorListComponent, DoctorExaminationComponent],
    providers: [DoctorService]
})

export class DoctorModule { }
