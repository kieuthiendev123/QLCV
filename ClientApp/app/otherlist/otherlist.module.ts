import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OtherListComponent } from './otherlist/otherlist.component';
import { OtherListTypeComponent } from './otherlisttype/otherlisttype.component';

import { OtherListRoutes } from './otherlist.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OtherListRoutes),
    FormsModule
  ],
  declarations: [
    OtherListComponent,
    OtherListTypeComponent
  ]
})

export class OtherListModule { }
