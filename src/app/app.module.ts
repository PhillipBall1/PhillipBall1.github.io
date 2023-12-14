import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlantsComponent } from './list-plants/list-plants.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlantsComponent
  ],
  imports: [
    AppRoutingModule,
		BrowserModule,
    HttpClientModule,
		FormsModule,
		ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
