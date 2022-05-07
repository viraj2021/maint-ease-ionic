import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ConditionPageRoutingModule } from './condition-routing.module';

import { ConditionPage } from './condition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,
    ConditionPageRoutingModule
  ],
  declarations: [ConditionPage]
})
export class ConditionPageModule {}

