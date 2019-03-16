import { Routes } from '@angular/router';


import { 
     ListRoomComponent,CommentComponent,ProjecttaskComponent,
     OtherlisttypeComponent,SprintComponent,TaskforsprintComponent } from './index';

import { ProjectComponent } from './project/project.component';
import { OtherlistComponent } from '../list/otherlist/otherlist.component';
import { PersonProjectComponent } from './personproject/personproject.component';
import { StatustaskComponent } from './statustask/statustask.component';
import { DrawComponent } from './draw/draw.component';
import { PermissionComponent } from './cc/permission.component';
export const ListRoutes: Routes = [
    {
        path: 'list',
        children: [{
            path: 'room',
            component: ListRoomComponent
        },
        {
            path: 'comment',
            component: CommentComponent
        },
        {
            path: 'taskforsprint',
            component: TaskforsprintComponent
        },
        {
            path: 'projecttask',
            component: ProjecttaskComponent
        }, {
            path: 'sprint',
            component: SprintComponent
        }, {
            path: 'statustask',
            component: StatustaskComponent
        },
        {
            path: 'project',
            component: ProjectComponent
        },
        {

            path: 'otherlist',
            component: OtherlistComponent
        }, {
            path: 'otherlisttype',
            component: OtherlisttypeComponent
        }, {
            path: 'personproject',
            component: PersonProjectComponent
        },
        {
            path:'draw',
            component:DrawComponent
        },
        {
            path:'permission',
            component : PermissionComponent
        }
    ]
    }
];
