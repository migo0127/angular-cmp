import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis.component';
import { AnalysisPaymentComponent } from './analysis-payment/analysis-payment.component';

const routes: Routes = [
  { path: '',
    component: AnalysisComponent,
    children: [
      { path: '', redirectTo: 'payment', pathMatch: 'full' },
      { path: 'payment', component: AnalysisPaymentComponent },
      { path: '**', redirectTo: 'payment' },
    ]
  },
  { path: '**', redirectTo: 'payment' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }
