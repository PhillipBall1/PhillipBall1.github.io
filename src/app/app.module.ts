import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPlantComponent } from './display-plant/display-plant.component';
import { HeaderComponent } from './core-header/header.component';
import { HomeImageGridComponent } from './home-image-grid/home-image-grid.component';
import { HomeFeaturedDisplayComponent } from './home-featured-display/home-featured-display.component';
import { HomeComponent } from './home/home.component';
import { ShopAllSearchComponent } from './shop-all-search/shop-all-search.component';
import { ShopAllComponent } from './shop-all/shop-all.component';
import { ShopAllListComponent } from './shop-all-list/shop-all-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { UserCartComponent } from './user-cart/user-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPlantComponent,
    HeaderComponent,
    HomeImageGridComponent,
    HomeFeaturedDisplayComponent,
    HomeComponent,
    ShopAllSearchComponent,
    ShopAllComponent,
    ShopAllListComponent,
    UserLoginComponent,
    UserCreateComponent,
    UserComponent,
    AdminComponent,
    AdminCreateComponent,
    UserCartComponent,
  ],
  imports: [
    AppRoutingModule,
		BrowserModule,
    HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
