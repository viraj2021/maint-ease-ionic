import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'workorder',
        loadChildren: () => import('../workorder/workorder.module').then(m => m.WorkOrderPageModule)
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
        redirectTo: '/tabs/workorder',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/workorder',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
