import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateComponent } from './state/state.component';
import { HomeComponent } from './home/home.component';
import { DistrictComponent } from './district/district.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  { path:'state/:id',component: StateComponent},
  {path:'state/district/:id',component:DistrictComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
