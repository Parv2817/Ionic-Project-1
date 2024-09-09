import { Component, OnInit } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';
@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss'],
})
export class NetworkComponent  implements OnInit {

  nType = 'Unknown';
  constructor(private network: Network ) 
  {
    if (this.network.type != null) 
    {
    this.nType = this.network.type;
    }
    // watch network for a disconnection
    const disconnectSubscription = this.network.onDisconnect()
    .subscribe(() => {
    console.log('Network was disconnected'); },
    error => { console.log('Network error: ' + error); },
    () => { console.log('Network complete.'); });

    // stop disconnect watch
    disconnectSubscription.unsubscribe();

    // watch network for a connection
    const connectSubscription = this.network.onConnect()
    .subscribe(() => {
    console.log('Network connected!');
    this.nType = this.network.type;

    // Determine the connection type
    setTimeout(() => { this.nType = network.type; }, 3000); });
    connectSubscription.unsubscribe(); /* Stop connect watch */
  }
  
  ngOnInit() {}

}
