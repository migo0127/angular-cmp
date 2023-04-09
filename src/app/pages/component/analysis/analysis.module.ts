import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis.component';
import { AnalysisPaymentComponent } from './analysis-payment/analysis-payment.component';

@NgModule({
  declarations: [
    AnalysisComponent,
    AnalysisPaymentComponent,
  ],
  imports: [
    ShareModule,
    AnalysisRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class AnalysisModule { }
