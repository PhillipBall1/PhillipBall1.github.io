import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlantsComponent } from './list-plants/list-plants.component';
import { DisplayPlantComponent } from './display-plant/display-plant.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'plants', component: ListPlantsComponent },
  { path: 'display-plant', component: DisplayPlantComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
