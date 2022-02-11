import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'work-order',
        loadChildren: () => import('../work-order/work-order.module').then(m => m.WorkOrderPageModule)
      },
      {
        path: 'asset',
        loadChildren: () => import('../asset/asset.module').then(m => m.AssetPageModule)
      },
      {
        path: 'part',
        loadChildren: () => import('../part/part.module').then(m => m.PartPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/work-order',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/work-order',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
