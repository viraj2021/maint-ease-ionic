import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartPage } from './part.page';

const routes: Routes = [
  {
    path: '',
    component: PartPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
