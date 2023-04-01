import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthurizedComponent } from './base/unauthurized/unauthurized.component';
import { LoginComponent } from './base/login/login.component';

const routes: Routes = [
  { path: '', component: UnauthurizedComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pages',
    canActivate: [],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule)
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
