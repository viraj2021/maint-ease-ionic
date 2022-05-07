import { Component } from '@angular/core';
import { NavController, ToastController, Platform, IonItemSliding } from '@ionic/angular';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import {RequestService} from '../../services/request/request.service';
import {Request} from '../../../model/request.model';
@Component({
  selector: 'page-request',
  templateUrl: 'request.page.html',
  styleUrls: ['request.page.scss']
})
export class RequestPage {
  requests: Request[];

  // todo: add pagination
  showLoader = false;

  constructor(
    private navController: NavController,
    private requestService: RequestService,
    private toastCtrl: ToastController,
    public plt: Platform
  ) {
    this.requests = [];
  }

  async ionViewWillEnter() {
    await this.loadAll();
  }

  async loadAll(refresher?) {
    if(!refresher) {
      this.showLoader = true;
    }
    this.requestService
      .query()
      .pipe(
        filter((res: HttpResponse<Request[]>) => res.ok),
        map((res: HttpResponse<Request[]>) => res.body)
      )
      .subscribe(
        (response: Request[]) => {
          this.requests = response;
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

  trackId(index: number, item: Request) {
    return item.id;
  }

  async new() {
    await this.navController.navigateForward('/tabs/request/new');
  }

  async edit(item: IonItemSliding, request: Request) {
    await this.navController.navigateForward('/tabs/request/' + request.id + '/edit');
    await item.close();
  }

  async delete(request) {
    this.requestService.delete(request.id).subscribe(
      async () => {
        const toast = await this.toastCtrl.create({ message: 'Request deleted successfully.', duration: 3000, position: 'middle' });
        await toast.present();
        await this.loadAll();
      },
      (error) => console.error(error)
    );
  }

  async view(request: Request) {
    await this.navController.navigateForward('/tabs/request/' + request.id + '/view');
  }
}
