import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-1', pathMatch: 'full' },      
  { path: 'page-1', component: Page1Component },
  { path: 'page-2', component: Page2Component },
  { path: '**', redirectTo: 'page-2' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
