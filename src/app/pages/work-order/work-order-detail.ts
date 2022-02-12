import { Component, OnInit } from '@angular/core';
import { JhiDataUtils } from '../../services/utils/data-util.service';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {WorkOrder} from '../../../model/work-order.model';
import {WorkOrderService} from '../../services/work-order/work-order.service';

@Component({
  selector: 'page-work-order-detail',
  templateUrl: 'work-order-detail.html',
})
export class WorkOrderDetailPage implements OnInit {
  workOrder: WorkOrder = {};

  constructor(
    private dataUtils: JhiDataUtils,
    private navController: NavController,
    private workOrderService: WorkOrderService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.workOrder = response.data;
    });
  }

  open(item: WorkOrder) {
    this.navController.navigateForward('/tabs/work-order/' + item.id + '/edit');
  }

  async deleteModal(item: WorkOrder) {
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
            this.workOrderService.delete(item.id).subscribe(() => {
              this.navController.navigateForward('/tabs/work-order');
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
