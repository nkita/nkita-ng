import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dataList } from './nk-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDataList(){
    console.log(of(dataList));
    return dataList;
  }
}
