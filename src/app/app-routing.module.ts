import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TechnologyComponent } from './component/technology/technology.component';
import { CommonModalComponent } from './component/common-modal/common-modal.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "technology/:id", component: TechnologyComponent},
  { path: "add-topic", component: CommonModalComponent},
  { path: "**", redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
