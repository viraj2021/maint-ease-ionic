import { Component, OnInit } from '@angular/core';
import { JhiDataUtils } from '../../services/utils/data-util.service';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {Part} from '../../../model/part.model';
import {PartService} from '../../services/part/part.service';

@Component({
  selector: 'page-part-detail',
  templateUrl: 'part-detail.html',
})
export class PartDetailPage implements OnInit {
  part: Part = {};

  constructor(
    private dataUtils: JhiDataUtils,
    private navController: NavController,
    private partService: PartService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.part = response.data;
    });
  }

  open(item: Part) {
    this.navController.navigateForward('/tabs/part/' + item.id + '/edit');
  }

  async deleteModal(item: Part) {
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
            this.partService.delete(item.id).subscribe(() => {
              this.navController.navigateForward('/tabs/part');
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
