import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PartPage } from './part.page';
import { PartUpdatePage } from './part-update';
import { PartDetailPage } from './part-detail';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PartRoutingModule } from './part-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    TranslateModule,
    PartRoutingModule,
  ],
  declarations: [PartPage,  PartUpdatePage, PartDetailPage]
})
export class PartPageModule {}
