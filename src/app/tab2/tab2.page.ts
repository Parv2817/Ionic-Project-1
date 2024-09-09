import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  stationName!: string;
  stationDetails: any;
  message!: string;

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {}

  ngOnInit() 
  {
    this.route.queryParams.subscribe(params => {
      this.stationName = params['stationName'];
      this.stationDetails = this.data.getItem(this.stationName);
    });

    this.data.current.subscribe(message => this.message = message);
  }

  sendMessage() 
  {
    this.data.modifyMessage(this.message);
  }

  nativePage() 
  {
    this.router.navigate(['/native']);
  }
}
