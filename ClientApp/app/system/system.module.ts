import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalModule } from 'ng2-bs3-modal';
import { TreeviewModule } from 'ngx-treeview';
import { SystemPermissionComponent, SystemAccountComponent,SystemPermissionGroupComponent,SystemPermissionGroupEditComponent } from './index';
import { SystemRoutes } from './system.routing';
import { AccountService,PermissionGroupService } from '../_services';

@NgModule({
    imports: [
        RouterModule.forChild(SystemRoutes),
        CommonModule,
        FormsModule,
        NgxDatatableModule,
        BsModalModule,
        TreeviewModule.forRoot(),
    ],
    declarations: [SystemPermissionComponent, SystemAccountComponent,SystemPermissionGroupComponent,SystemPermissionGroupEditComponent],
    providers: [
        AccountService,
        PermissionGroupService
        
    ]
})

export class SystemModule { }
