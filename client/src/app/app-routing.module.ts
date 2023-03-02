import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './shared/auth/user-auth.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'advertiser', canActivate:[UserAuthGuard], loadChildren: () => import('./modules/advertiser/advertiser.module').then(m => m.AdvertiserModule)
  },
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
