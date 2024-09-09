import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppversionComponent } from './appversion/appversion.component';
import { NetworkComponent } from './network/network.component';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [AppversionComponent, NetworkComponent, ToastComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AppversionComponent, NetworkComponent, ToastComponent]
})
export class NativeModule { }
