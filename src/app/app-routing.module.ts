import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mot-de-pase-oublier',
    loadChildren: () => import('./mot-de-pase-oublier/mot-de-pase-oublier.module').then( m => m.MotDePaseOublierPageModule)
  },

  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)},

    {
      path: 'recherche',
      loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
    },

    {
      path: 'renitialisationmotdepasse',
      loadChildren: () => import('./renitialisationmotdepasse/renitialisationmotdepasse.module').then( m => m.RenitialisationmotdepassePageModule)
    },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
