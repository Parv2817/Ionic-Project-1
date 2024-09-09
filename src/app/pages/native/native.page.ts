import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-native',
  templateUrl: './native.page.html',
  styleUrls: ['./native.page.scss'],
})
export class NativePage implements OnInit {

  message!: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.current.subscribe(msg => this.message = msg);
  }

}
