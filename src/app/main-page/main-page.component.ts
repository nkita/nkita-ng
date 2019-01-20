import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  colsize: number = 4;
  constructor(private dataService: DataService, private ngZone: NgZone) {
    window.onresize = (e) => {
      ngZone.run(() => {
        // console.log(window.innerWidth + " ==== " + this.colsize);
        this.setColSize(window.innerWidth);
      });
    };
  }

  ngOnInit() {
    this.setColSize(window.innerWidth);
  }
  data_list = this.dataService.getDataList();

  setColSize(width: number) {
    if (1000 <= width) this.colsize = 4;
    if (800 <= width && width < 1000) this.colsize = 3;
    if (500 <= width && width < 800) this.colsize = 2;
    if (width < 500) this.colsize = 1;
  }
}
