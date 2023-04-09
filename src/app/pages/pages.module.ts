import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MenuComponent } from './component/menu/menu.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DemoComponent } from './component/demo/demo.component';

@NgModule({
  declarations: [
    PagesComponent,
    MenuComponent,
    SideNavComponent,
    FooterComponent,
    DashboardComponent,
    DemoComponent,
  ],
  imports: [
    ShareModule,
    PagesRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
