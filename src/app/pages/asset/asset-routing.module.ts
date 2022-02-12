import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {Observable, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import { AssetPage } from './asset.page';
import {UserRouteAccessService} from '../../services/auth/user-route-access.service';
import {AssetUpdatePage} from './asset-update';
import { Asset } from 'src/model/asset.model';
import {AssetService} from '../../services/asset/asset.service';
import {AssetDetailPage} from './asset-detail';


@Injectable({ providedIn: 'root' })
export class AssetResolve implements Resolve<Asset> {
  constructor(private service: AssetService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Asset> {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Asset>) => response.ok),
        map((asset: HttpResponse<Asset>) => asset.body)
      );
    }
    return of(new Asset());
  }
}
const routes: Routes = [
  {
    path: '',
    component: AssetPage,
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: AssetUpdatePage,
    resolve: {
      data: AssetResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: AssetDetailPage,
    resolve: {
      data: AssetResolve,
    },
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: AssetUpdatePage,
    resolve: {
      data: AssetResolve,
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
export class AssetRoutingModule {}
