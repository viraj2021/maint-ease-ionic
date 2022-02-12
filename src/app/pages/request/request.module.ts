import { NgModule, Injectable } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserRouteAccessService } from '../../services/auth/user-route-access.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

import { RequestPage } from './request.page';
import { RequestUpdatePage } from './request-update';
import {RequestService} from '../../services/request/request.service';
import {RequestDetailPage} from './request-detail';
import {Request} from '../../../model/request.model';
@Injectable({ providedIn: 'root' })
export class RequestResolve implements Resolve<Request> {
  constructor(private service: RequestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Request> {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Request>) => response.ok),
        map((request: HttpResponse<Request>) => request.body)
      );
    }
    return of(new Request());
  }
}

const routes: Routes = [
  {
    path: '',
    component: RequestPage,
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: RequestUpdatePage,
    resolve: {
      data: RequestResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: RequestDetailPage,
    resolve: {
      data: RequestResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: RequestUpdatePage,
    resolve: {
      data: RequestResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  declarations: [RequestPage, RequestUpdatePage, RequestDetailPage],
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule, TranslateModule, RouterModule.forChild(routes)],
})
export class RequestPageModule {}
