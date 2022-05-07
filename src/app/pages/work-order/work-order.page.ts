import { Component } from '@angular/core';
import { NavController, ToastController, Platform, IonItemSliding } from '@ionic/angular';
import { filter, map } from 'rxjs/operators';
import {WorkOrder} from '../../../model/work-order.model';
import {HttpResponse} from '@angular/common/http';
import {JhiDataUtils} from '../../services/utils/data-util.service';
import {WorkOrderService} from '../../services/work-order/work-order.service';

@Component({
  selector: 'app-work-order',
  templateUrl: 'work-order.page.html',
  styleUrls: ['work-order.page.scss']
})
export class WorkOrderPage {
  workOrders: WorkOrder[];

  // todo: add pagination
  showLoader = false;
  private itemsPerPage = 10;

  constructor(
    private dataUtils: JhiDataUtils,
    private navController: NavController,
    private workOrderService: WorkOrderService,
    private toastCtrl: ToastController,
    public plt: Platform
  ) {
    this.workOrders = [];
  }

  async ionViewWillEnter() {
    await this.loadAll();
  }

  async loadAll(refresher?) {
    if(!refresher) {
      this.showLoader = true;
    }
    this.workOrderService
      .query({page: 0,
        size: this.itemsPerPage,})
      .pipe(
        filter((res: HttpResponse<WorkOrder[]>) => res.ok),
        map((res: HttpResponse<WorkOrder[]>) => res.body)
      )
      .subscribe(
        (response: WorkOrder[]) => {
          this.workOrders = response;
          if (typeof refresher !== 'undefined') {
            setTimeout(() => {
              refresher.target.complete();
            }, 750);
          }
          this.showLoader = false;
        },
        async (error) => {
          console.error(error);
          this.showLoader = false;
          const toast = await this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
          await toast.present();
        }
      );
  }

  trackId(index: number, item: WorkOrder) {
    return item.id;
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  async new() {
    await this.navController.navigateForward('/tabs/work-order/new');
  }

  async edit(item: IonItemSliding, workOrder: WorkOrder) {
    await this.navController.navigateForward('/tabs/work-order/' + workOrder.id + '/edit');
    await item.close();
  }

  async delete(workOrder) {
    this.workOrderService.delete(workOrder.id).subscribe(
      async () => {
        const toast = await this.toastCtrl.create({ message: 'WorkOrder deleted successfully.', duration: 3000, position: 'middle' });
        await toast.present();
        await this.loadAll();
      },
      (error) => console.error(error)
    );
  }

  async view(workOrder: WorkOrder) {
    await this.navController.navigateForward('/tabs/work-order/' + workOrder.id + '/view');
  }

}
