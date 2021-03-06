import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetPage } from './asset.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { AssetDetailPage } from './asset-detail';
import { AssetUpdatePage } from './asset-update';
import { AssetRoutingModule } from './asset-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    TranslateModule,
    AssetRoutingModule
  ],
  declarations: [AssetPage, AssetDetailPage, AssetUpdatePage]
})
export class AssetPageModule {}
