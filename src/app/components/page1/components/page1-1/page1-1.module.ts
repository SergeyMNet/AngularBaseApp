import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { Page1_1Component } from './page1-1.component';
import { PAGE1_1_ROUTES } from './page1-1.routes';

@NgModule({
    imports: [
        CommonModule,
            RouterModule.forChild (PAGE1_1_ROUTES),
    ],
    declarations: [
        Page1_1Component,
    ],
    exports: [
        Page1_1Component,
    ]
})
export class Page1_1Module {

}
