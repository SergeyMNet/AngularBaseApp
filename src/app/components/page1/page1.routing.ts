import {Routes} from '@angular/router';
import { Page1Component} from './page1.component';

export const PAGE1_ROUTES: Routes = [
    {
        path: '', component: Page1Component,
         children: [
            {
                path: 'page1-1', 
                loadChildren: 'app/components/page1/components/page1-1/page1-1.module#Page1_1Module'
            },
            {
                path: 'page1-2', 
                loadChildren: 'app/components/page1/components/page1-2/page1-2.module#Page1_2Module'
            },
        ]
    },
    
    {path: '**', redirectTo: 'page-1'}
];
