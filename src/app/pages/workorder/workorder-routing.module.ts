import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkorderPage } from './workorder.page';

const routes: Routes = [
  {
    path: '',
    component: WorkorderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
