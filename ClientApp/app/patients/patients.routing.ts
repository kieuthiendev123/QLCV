import { Routes } from '@angular/router';

import { PatientsEditComponent, PatientsListComponent } from './index';

export const PatientsRoutes: Routes = [
    {
        path: 'patients',
        children: [{
            path: 'list',
            component: PatientsListComponent
        }, {
            path: 'edit/:id',
            component: PatientsEditComponent
        }]
    }
];
