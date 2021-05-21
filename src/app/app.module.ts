import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StateComponent } from './state/state.component';
import { HomeComponent } from './home/home.component';
import { DistrictComponent } from './district/district.component';
@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    HomeComponent,
    DistrictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
