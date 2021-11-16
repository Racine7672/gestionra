import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotDePaseOublierPageRoutingModule } from './mot-de-pase-oublier-routing.module';

import { MotDePaseOublierPage } from './mot-de-pase-oublier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotDePaseOublierPageRoutingModule
  ],
  declarations: [MotDePaseOublierPage]
})
export class MotDePaseOublierPageModule {}
