import { NgModule } from '@angular/core';
import { OrderRoutingModule } from './order-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { OrderComponent } from './order.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderListComponent,
  ],
  imports: [
    ShareModule,
    OrderRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class OrderModule { }
