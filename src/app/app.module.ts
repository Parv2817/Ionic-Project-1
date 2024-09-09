import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AppVersion, Network, Toast],
  bootstrap: [AppComponent],
})
export class AppModule {}
