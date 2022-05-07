import { Component } from '@angular/core';
import {Part} from '../../../model/part.model';
import {IonItemSliding, NavController, Platform, ToastController} from '@ionic/angular';
import {HttpResponse} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import {JhiDataUtils} from '../../services/utils/data-util.service';
import {PartService} from '../../services/part/part.service';

@Component({
  selector: 'app-part',
  templateUrl: 'part.page.html',
  styleUrls: ['part.page.scss']
})
export class PartPage {
  parts: Part[];

  // todo: add pagination
  showLoader = false;

  constructor(
    private dataUtils: JhiDataUtils,
    private navController: NavController,
    private partService: PartService,
    private toastCtrl: ToastController,
    public plt: Platform
  ) {
    this.parts = [];
  }

  async ionViewWillEnter() {
    await this.loadAll();
  }

  async loadAll(refresher?) {
    if(!refresher) {
      this.showLoader = true;
    }
    this.partService
      .query()
      .pipe(
        filter((res: HttpResponse<Part[]>) => res.ok),
        map((res: HttpResponse<Part[]>) => res.body)
      )
      .subscribe(
        (response: Part[]) => {
          this.parts = response;
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

  trackId(index: number, item: Part) {
    return item.id;
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  async new() {
    await this.navController.navigateForward('/tabs/part/new');
  }

  async edit(item: IonItemSliding, part: Part) {
    await this.navController.navigateForward('/tabs/part/' + part.id + '/edit');
    await item.close();
  }

  async delete(part) {
    this.partService.delete(part.id).subscribe(
      async () => {
        const toast = await this.toastCtrl.create({ message: 'Part deleted successfully.', duration: 3000, position: 'middle' });
        await toast.present();
        await this.loadAll();
      },
      (error) => console.error(error)
    );
  }

  async view(part: Part) {
    await this.navController.navigateForward('/tabs/part/' + part.id + '/view');
  }

}
