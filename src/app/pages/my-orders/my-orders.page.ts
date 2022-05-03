import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
   segment = 0;   
   @ViewChild('slides', { static: true }) slider: IonSlides;   
  constructor(private route: Router) { }

  ngOnInit() {
  }

  search() {
    this.route.navigate(['./search']);
  } 
    

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }     
}
