import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TranslateModule } from '@ngx-translate/core';
import { WorkOrderPage } from './work-order.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { WorkOrderUpdatePage } from './work-order-update';
import { WorkOrderDetailPage } from './work-order-detail';

import { WorkOrderRoutingModule } from './work-order-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ScrollingModule,
    ReactiveFormsModule,
    TranslateModule,
    WorkOrderRoutingModule
  ],
  declarations: [WorkOrderPage, WorkOrderDetailPage, WorkOrderUpdatePage]
})
export class WorkOrderPageModule {}
