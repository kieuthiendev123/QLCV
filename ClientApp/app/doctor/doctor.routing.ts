import { Routes } from '@angular/router';

import { DoctorExaminationComponent, DoctorListComponent } from './index';

export const DoctorRoutes: Routes = [
    {
        path: 'doctor',
        children: [{
            path: 'list',
            component: DoctorListComponent
        }, {
            path: 'examination/:id',
            component: DoctorExaminationComponent
        }]
    }
];
