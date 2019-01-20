import { Injectable } from '@angular/core';
import { confList } from './nk-config';
import { Config } from './nk-config';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  constructor() { }
  conf_list : Config = confList;
  toggleSidenav(){
    this.conf_list.open = !this.conf_list.open;
  }
  getOpenFlg(){
    return this.conf_list.open;
  }
}
