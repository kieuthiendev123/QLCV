import { Routes } from '@angular/router';

import { SystemAccountComponent, SystemPermissionComponent,SystemPermissionGroupComponent,SystemPermissionGroupEditComponent } from './index';

export const SystemRoutes: Routes = [
    {
        path: 'system',
        children: [{
            path: 'account',
            component: SystemAccountComponent
        }, {
            path: 'permission',
            component: SystemPermissionComponent
        },{
            path: 'permissiongroup',
            component:SystemPermissionGroupComponent
        }, {
            path: 'permissiongroup/edit/:id',
            component: SystemPermissionGroupEditComponent
        }]
    }
];
