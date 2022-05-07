import { Component } from '@angular/core';
import {MoreModalPage} from './modal/more-modal.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalController: ModalController) {}

  async showModalSelector() {
    const modal = await this.modalController.create({
      component: MoreModalPage,
      cssClass: 'custom_modal'
    });
    return await modal.present();
  }
}
