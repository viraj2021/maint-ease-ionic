import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PartPage } from './part.page';
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
    RouterModule.forChild([{ path: '', component: PartPage }]),
    PartRoutingModule,
  ],
  declarations: [PartPage]
})
export class PartPageModule {}
