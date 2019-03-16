import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { StoreComponent } from './store.component'
import { StoreRoutes } from './store.routing'

@NgModule({
    imports: [CommonModule, RouterModule.forChild(StoreRoutes)],
    declarations: [StoreComponent]
})
export class StoreModule { };