import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';

import { Page1_1Component } from './components/page1/components/page1-1/page1-1.component';
import { Page1_2Component } from './components/page1/components/page1-2/page1-2.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-1', pathMatch: 'full' },      
  { path: 'page-1', component: Page1Component },
  { path: 'page-2', component: Page2Component },

  { path: 'page-1/page1-1', component: Page1_1Component },
  { path: 'page-1/page1-1/page1-2', component: Page1_2Component },

  { path: '**', redirectTo: 'page-2' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
