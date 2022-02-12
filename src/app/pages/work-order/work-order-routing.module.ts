import { NgModule, Injectable } from '@angular/core';
import { WorkOrderPage } from './work-order.page';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserRouteAccessService } from '../../services/auth/user-route-access.service';
import {WorkOrder} from '../../../model/work-order.model';
import {WorkOrderService} from '../../services/work-order/work-order.service';
import {Observable, of} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import {WorkOrderUpdatePage} from './work-order-update';
import {WorkOrderDetailPage} from './work-order-detail';

@Injectable({ providedIn: 'root' })
export class WorkOrderResolve implements Resolve<WorkOrder> {
  constructor(private service: WorkOrderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WorkOrder> {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<WorkOrder>) => response.ok),
        map((workOrder: HttpResponse<WorkOrder>) => workOrder.body)
      );
    }
    return of(new WorkOrder());
  }
}

const routes: Routes = [
  {
    path: '',
    component: WorkOrderPage,
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: WorkOrderUpdatePage,
    resolve: {
      data: WorkOrderResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: WorkOrderDetailPage,
    resolve: {
      data: WorkOrderResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: WorkOrderUpdatePage,
    resolve: {
      data: WorkOrderResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrderRoutingModule {}
