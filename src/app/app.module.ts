import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlantsComponent } from './list-plants/list-plants.component';
import { DisplayPlantComponent } from './display-plant/display-plant.component';
import { HeaderComponent } from './header/header.component';
import { HomeImageGridComponent } from './home-image-grid/home-image-grid.component';
import { HomeFeaturedDisplayComponent } from './home-featured-display/home-featured-display.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlantsComponent,
    DisplayPlantComponent,
    HeaderComponent,
    HomeImageGridComponent,
    HomeFeaturedDisplayComponent,
    HomeComponent
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
