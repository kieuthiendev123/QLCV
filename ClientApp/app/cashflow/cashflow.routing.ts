import { Routes } from '@angular/router';

import { CashFlowPaymentComponent, CashFlowReceiveComponent, CashFlowWaitingComponent } from './index';

export const CashflowRoutes: Routes = [
    {
        path: 'fee',
        children: [{
            path: 'waiting',
            component: CashFlowWaitingComponent
        }, {
            path: 'receive',
            component: CashFlowReceiveComponent
        }, {
            path: 'payment',
            component: CashFlowPaymentComponent
        }]
    }
];
