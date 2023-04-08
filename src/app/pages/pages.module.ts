import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { OrderComponent } from './component/order/order.component';
import { MenuComponent } from './component/menu/menu.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    PagesComponent,
    OrderComponent,
    MenuComponent,
    SideNavComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    ShareModule,
    PagesRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
