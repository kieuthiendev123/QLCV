import { LockComponent } from './lock/lock.component';
import { PricingComponent } from './pricing/pricing.component';
import { Routes } from '@angular/router';

export const PagesRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'lock',
            component: LockComponent
        }, {
            path: 'pricing',
            component: PricingComponent
        }]
    }
];
