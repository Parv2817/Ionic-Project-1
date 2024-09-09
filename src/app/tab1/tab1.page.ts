import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  stationList: string[] = [];
  stationName!: string;
  message!: string;

  constructor(private data: DataService, private http: HttpClient, private router: Router) {}

  ngOnInit() 
  {
    this.http.get('assets/data/bikeshare.json').subscribe((data: any) => 
    {
      data.forEach((stationName: any) => 
      {
        this.data.saveItems(stationName.stationName, stationName);
        this.stationList.push(stationName.stationName);
      });
    });

    this.data.current.subscribe(msg => this.message = msg);
  }

  selectedStation() {
    this.router.navigate(['/tabs/bike-details'], { queryParams: { stationName: this.stationName } });
  }
}
