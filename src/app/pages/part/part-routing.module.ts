import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import { PartPage } from './part.page';
import {UserRouteAccessService} from '../../services/auth/user-route-access.service';
import {PartUpdatePage} from './part-update';
import {PartDetailPage} from './part-detail';
import {Part} from '../../../model/part.model';
import {PartService} from '../../services/part/part.service';
import {Observable, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PartResolve implements Resolve<Part> {
  constructor(private service: PartService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Part> {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Part>) => response.ok),
        map((part: HttpResponse<Part>) => part.body)
      );
    }
    return of(new Part());
  }
}

const routes: Routes = [
  {
    path: '',
    component: PartPage,data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PartUpdatePage,
    resolve: {
      data: PartResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PartDetailPage,
    resolve: {
      data: PartResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PartUpdatePage,
    resolve: {
      data: PartResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartRoutingModule {}
