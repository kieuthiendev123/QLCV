import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DrugComponent } from './drug.component';
import { DrugRoute } from './drug.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DrugRoute),
        FormsModule
    ],
    declarations: [DrugComponent]
})

export class DrugModule { }
