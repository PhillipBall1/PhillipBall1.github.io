import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlantsComponent } from './list-plants/list-plants.component';
import { DisplayPlantComponent } from './display-plant/display-plant.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlantsComponent,
    DisplayPlantComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
		BrowserModule,
    HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
