import {Routes} from '@angular/router';
import {Page1_2Component} from "./page1-2.component";

export const PAGE1_2_ROUTES: Routes = [
    {
        path: '', component: Page1_2Component
    },

    {path: '**', redirectTo: ''}
]
