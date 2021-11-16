import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenitialisationmotdepassePageRoutingModule } from './renitialisationmotdepasse-routing.module';

import { RenitialisationmotdepassePage } from './renitialisationmotdepasse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenitialisationmotdepassePageRoutingModule
  ],
  declarations: [RenitialisationmotdepassePage]
})
export class RenitialisationmotdepassePageModule {}
