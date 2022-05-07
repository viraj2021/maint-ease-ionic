import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-more-modal',
  templateUrl: './more-modal.page.html',
  styleUrls: ['./more-modal.page.scss'],
})
export class MoreModalPage implements OnInit {

  categories = [];
  constructor(
    private router: Router,
    private modalController: ModalController) {
    this.categories = [ {
      icon : 'clipboard-outline',
      name : 'Requests',
    },
      {
        icon : 'person-outline',
        name : 'Profile'
      },
      {
        icon : 'receipt-outline',
        name : 'Terms & Condition'
      }];
  }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss();
  }
  goToPage(category) {

    const navData: NavigationExtras = {
      queryParams: {
        // id: val.name
      }
    };
    this.dismiss();
    /*if (category.name === 'Terms & Condition') {
      this.router.navigate(['/tabs/terms-condition'], navData);
      return;
    }*/

    if (category.name === 'Requests') {
      this.router.navigate(['/tabs/request']);
      return;
    }
    if (category.name === 'Profile') {
      this.router.navigate(['/tabs/account']);
      return;
    }
    if (category.name === 'Terms & Condition') {
      this.router.navigate(['/tabs/conditions']);
      return;
    }

  }

}
