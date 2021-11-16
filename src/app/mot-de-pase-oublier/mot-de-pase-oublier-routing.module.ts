import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotDePaseOublierPage } from './mot-de-pase-oublier.page';

const routes: Routes = [
  {
    path: '',
    component: MotDePaseOublierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotDePaseOublierPageRoutingModule {}
