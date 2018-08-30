import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HumanComponent } from './models/human/human.component';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { HumanDetailsComponent } from './models/human/human-details/human-details.component';
import { HumanEditComponent } from './models/human/human-edit/human-edit.component';
import { HumanAddComponent } from './models/human/human-add/human-add.component';

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "humans", component: HumanComponent },
  { path: "humans/details/:id", component: HumanDetailsComponent },
  { path: "humans/edit/:id", component: HumanEditComponent },
  { path: "humans/add", component: HumanAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
