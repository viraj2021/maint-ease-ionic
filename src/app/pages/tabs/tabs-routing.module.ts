import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'work-order',
        loadChildren: () => import('../work-order/work-order.module').then(m => m.WorkOrderPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
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
        path: 'request',
        loadChildren: () => import('../request/request.module').then(m => m.RequestPageModule)
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
          }
        ]
      },
      {
        path: 'conditions',
        loadChildren: () => import('../terms-condition/condition.module').then(m => m.ConditionPageModule)
      },
      {
        path: '',
        redirectTo: 'work-order',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'work-order',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
