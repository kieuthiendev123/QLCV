import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Notification } from '../common/notification';

@NgModule({
    imports: [CommonModule],
    exports: [TranslateModule, CommonModule, FormsModule, ReactiveFormsModule],
    providers: [Notification]
})
export class SharedModule { }