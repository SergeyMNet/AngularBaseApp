import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/main/app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
