import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalModule } from 'ng2-bs3-modal';


import { CLSExaminationComponent, CLSListComponent } from './index';
import { CLSRoutes } from './cls.routing';

@NgModule({
    imports: [
        RouterModule.forChild(CLSRoutes),
        CommonModule,
        FormsModule,
        NgxDatatableModule,
        BsModalModule,
        ToastyModule.forRoot()
    ],
    declarations: [CLSExaminationComponent, CLSListComponent]
})

export class CLSModule { }
