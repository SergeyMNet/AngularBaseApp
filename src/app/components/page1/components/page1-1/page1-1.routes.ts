import {Routes} from '@angular/router';
import {Page1_1Component} from "./page1-1.component";

export const PAGE1_1_ROUTES: Routes = [
    {
        path: '', component: Page1_1Component
    },

    {path: '**', redirectTo: ''}
]
