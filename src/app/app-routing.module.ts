import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPlantComponent } from './display-plant/display-plant.component';
import { HomeComponent } from './home/home.component';
import { ShopAllComponent } from './shop-all/shop-all.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UserCartComponent } from './user-cart/user-cart.component';

const routes: Routes = [
  { path: 'display', component: DisplayPlantComponent },
  { path: 'modify', component: AdminComponent },
  { path: 'shop', component: ShopAllComponent },
  { path: 'login', component: UserComponent },
  { path: 'cart', component: UserCartComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
