import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DemoComponent } from './component/demo/demo.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'order',
        loadChildren: () => import('./component/order/order.module')
          .then(m => m.OrderModule)
      },
      { path: 'demo', component: DemoComponent },
      { path: '**', redirectTo: 'dashboard' },
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
