
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutes } from './auth.routing';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PagesRoutes)
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ]
})

export class AuthModule { }
