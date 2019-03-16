import { RegisterComponent } from './auth/register/register.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { StoreGuard, AdminGuard } from './common/auth.guard';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: 'store',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [StoreGuard]
    },
    {
        path: 'store',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: '',
                loadChildren: './list/list.module#ListModule'
            },
            {
                path: '',
                loadChildren: './system/system.module#SystemModule'
            },
            {
                path: '',
                loadChildren: './patients/patients.module#PatientsModule'
            },
            {
                path: '',
                loadChildren: './doctor/doctor.module#DoctorModule'
            },
            {
                path: '',
                loadChildren: './cashflow/cashflow.module#CashflowModule'
            },
            {
                path: '',
                loadChildren: './cls/cls.module#CLSModule'
            },
            {
                path: '',
                loadChildren: './drug/drug.module#DrugModule'
            },
            
        ],
        canActivate: [StoreGuard]
    },
    {
        path: 'admin',
        redirectTo: 'admin/store',
        pathMatch: 'full',
        canActivate: [AdminGuard]
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './store/store.module#StoreModule'
            }
        ],
        canActivate: [AdminGuard]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [{
            path: '',
            loadChildren: './auth/auth.module#AuthModule'
        }]
    }
];
