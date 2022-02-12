import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {RequestService} from '../../services/request/request.service';
import {Request} from '../../../model/request.model';

@Component({
  selector: 'page-request-detail',
  templateUrl: 'request-detail.html',
})
export class RequestDetailPage implements OnInit {
  request: Request = {};

  constructor(
    private navController: NavController,
    private requestService: RequestService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.request = response.data;
    });
  }

  open(item: Request) {
    this.navController.navigateForward('/tabs/entities/request/' + item.id + '/edit');
  }

  async deleteModal(item: Request) {
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
            this.requestService.delete(item.id).subscribe(() => {
              this.navController.navigateForward('/tabs/entities/request');
            });
          },
        },
      ],
    });
    await alert.present();
  }
}
