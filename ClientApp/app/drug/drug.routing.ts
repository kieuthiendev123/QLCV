import { Routes } from '@angular/router';

import { DrugComponent } from './drug.component';

export const DrugRoute: Routes = [
    {
        path: '',
        children: [{
            path: 'drug',
            component: DrugComponent
        }]
    }
];
