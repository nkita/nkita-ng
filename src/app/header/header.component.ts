import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private configService:ConfigService) { }

  ngOnInit() {
  }
  sideToggle(){
    this.configService.toggleSidenav();
  }
}
