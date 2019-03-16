import { Routes } from '@angular/router';

import { CLSListComponent, CLSExaminationComponent } from './index';

export const CLSRoutes: Routes = [
    {
        path: 'cls',
        children: [{
            path: 'list',
            component: CLSListComponent
        }, {
            path: 'examination/:id',
            component: CLSExaminationComponent
        }]
    }
];
