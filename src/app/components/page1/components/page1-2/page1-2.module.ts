import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page1_2Component } from './page1-2.component';
import { PAGE1_2_ROUTES } from './page1-2.routes';

@NgModule({
    imports: [
        CommonModule,
            RouterModule.forChild (PAGE1_2_ROUTES),
    ],
    declarations: [
        Page1_2Component,
    ],
    exports: [
        Page1_2Component,
    ]
})
export class Page1_2Module {

}
