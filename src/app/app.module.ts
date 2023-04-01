import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './base/login/login.component';
import { UnauthurizedComponent } from './base/unauthurized/unauthurized.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnauthurizedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShareModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
