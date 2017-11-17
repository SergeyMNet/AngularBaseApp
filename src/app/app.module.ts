import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';

// flex
import { FlexLayoutModule } from '@angular/flex-layout';

// routing
import { AppRoutingModule } from './app-routing.module';

// custom components
import { AppComponent } from './components/main/app.component';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';

import { Page1_1Component } from './components/page1/components/page1-1/page1-1.component';
import { Page1_2Component } from './components/page1/components/page1-2/page1-2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppFooterComponent,
    Page1Component,
    Page2Component,
    Page1_1Component,
    Page1_2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,    
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
