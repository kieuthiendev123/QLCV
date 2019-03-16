import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalModule } from 'ng2-bs3-modal';
import { DragulaModule,DragulaService } from 'ng2-dragula';
import { TreeviewModule } from 'ngx-treeview';
import { TreeModule, SharedModule } from 'primeng/primeng';
import {OtherlistComponent,OtherlisttypeComponent, ListRoomComponent,ProjectComponent,CommentComponent,ProjecttaskComponent,PersonProjectComponent,SprintComponent,StatustaskComponent,DrawComponent,PermissionComponent,TaskforsprintComponent} from './index';
import { ListRoutes } from './list.routing';
import { FeeService, CLSService, CLSIndexService, RoomService, 
    ICDService,WelfareService, ProjectService, AccountService,CommentService,
    ProjectTaskService,OtherListService, OtherListTypeService, PersonProjectService,SprintService,PermissionService } from '../_services';



@NgModule({
    imports: [
        RouterModule.forChild(ListRoutes),
        CommonModule,
        FormsModule,
        NgxDatatableModule,
        BsModalModule,
        DragulaModule.forRoot(),
        TreeviewModule.forRoot(),
        TreeModule, 
        SharedModule,
    ],
    declarations: [
         ListRoomComponent, ProjectComponent,
        CommentComponent, ProjecttaskComponent, OtherlistComponent, OtherlisttypeComponent,PersonProjectComponent, 
        SprintComponent,TaskforsprintComponent, StatustaskComponent,StatustaskComponent, DrawComponent,PermissionComponent],
    providers: [
        FeeService,
        CLSService,
        CLSIndexService,
        RoomService,
        ICDService,
        WelfareService,
        ProjectService,
        AccountService,
        CommentService,
        ProjectTaskService,
        OtherListService,
        OtherListTypeService,
        PersonProjectService,
        SprintService,
        DragulaService,
        PermissionService
    ]
})

export class ListModule { }
