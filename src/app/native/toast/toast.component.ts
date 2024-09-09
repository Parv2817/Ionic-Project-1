import { Component, OnInit } from '@angular/core';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent  implements OnInit {

  constructor(private toast: Toast) {}

  showToast() 
  {
  this.toast.show('This is a toast message!','5000','center')
  .subscribe( Toast => { console.log('Toast'); } );
  }

  ngOnInit() {}

}
