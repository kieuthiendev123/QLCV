import { Routes } from '@angular/router';

import { OtherListComponent } from './otherlist/otherlist.component';
import { OtherListTypeComponent } from './otherlisttype/otherlisttype.component';

export const OtherListRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'otherlist',
            component: OtherListComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'otherlisttype',
            component: OtherListTypeComponent
        }]
    }
];
