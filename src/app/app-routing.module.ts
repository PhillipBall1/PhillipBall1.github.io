import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlantsComponent } from './list-plants/list-plants.component';
import { DisplayPlantComponent } from './display-plant/display-plant.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'plants', component: ListPlantsComponent },
  { path: 'display-plant', component: DisplayPlantComponent },
  { path: 'home', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
