import { Component } from '@angular/core';
import {Asset} from '../../../model/asset.model';
import {IonItemSliding, NavController, Platform, ToastController} from '@ionic/angular';
import {JhiDataUtils} from '../../services/utils/data-util.service';
import {AssetService} from '../../services/asset/asset.service';
import {HttpResponse} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-asset',
  templateUrl: 'asset.page.html',
  styleUrls: ['asset.page.scss']
})
export class AssetPage {

  assets: Asset[];

  // todo: add pagination

  constructor(
    private dataUtils: JhiDataUtils,
    private navController: NavController,
    private assetService: AssetService,
    private toastCtrl: ToastController,
    public plt: Platform
  ) {
    this.assets = [];
  }

  async ionViewWillEnter() {
    await this.loadAll();
  }

  async loadAll(refresher?) {
    this.assetService
      .query()
      .pipe(
        filter((res: HttpResponse<Asset[]>) => res.ok),
        map((res: HttpResponse<Asset[]>) => res.body)
      )
      .subscribe(
        (response: Asset[]) => {
          this.assets = response;
          if (typeof refresher !== 'undefined') {
            setTimeout(() => {
              refresher.target.complete();
            }, 750);
          }
        },
        async (error) => {
          console.error(error);
          const toast = await this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
          await toast.present();
        }
      );
  }

  trackId(index: number, item: Asset) {
    return item.id;
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  async new() {
    await this.navController.navigateForward('/tabs/asset/new');
  }

  async edit(item: IonItemSliding, asset: Asset) {
    await this.navController.navigateForward('/tabs/asset/' + asset.id + '/edit');
    await item.close();
  }

  async delete(asset) {
    this.assetService.delete(asset.id).subscribe(
      async () => {
        const toast = await this.toastCtrl.create({ message: 'Asset deleted successfully.', duration: 3000, position: 'middle' });
        await toast.present();
        await this.loadAll();
      },
      (error) => console.error(error)
    );
  }

  async view(asset: Asset) {
    await this.navController.navigateForward('/tabs/asset/' + asset.id + '/view');
  }

}
