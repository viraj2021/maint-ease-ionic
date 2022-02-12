import { Component, OnInit } from '@angular/core';
import { JhiDataUtils } from '../../services/utils/data-util.service';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {AssetService} from '../../services/asset/asset.service';
import {Asset} from '../../../model/asset.model';

@Component({
  selector: 'page-asset-detail',
  templateUrl: 'asset-detail.html',
})
export class AssetDetailPage implements OnInit {
  asset: Asset = {};

  constructor(
    private dataUtils: JhiDataUtils,
    private navController: NavController,
    private assetService: AssetService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.asset = response.data;
    });
  }

  open(item: Asset) {
    this.navController.navigateForward('/tabs/entities/asset/' + item.id + '/edit');
  }

  async deleteModal(item: Asset) {
    const alert = await this.alertController.create({
      header: 'Confirm the deletion?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.assetService.delete(item.id).subscribe(() => {
              this.navController.navigateForward('/tabs/entities/asset');
            });
          },
        },
      ],
    });
    await alert.present();
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }
}
