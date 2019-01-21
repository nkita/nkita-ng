import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { dataList } from './nk-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**
  * リクエストヘッダを定義
  *
  * @private
  * @memberof HttpClientService
  */
  private headers: any = new Headers({ 'Content-Type': 'application/json' });

  /**
  * RST-API 実行時に指定する URL
  *
  * バックエンドは Express で実装し、ポート番号「3000」で待ち受けているため、
  * そのまま指定すると CORS でエラーになる
  * それを回避するため、ここではフロントエンドのポート番号「4200」を指定し、
  * Angular CLI のリバースプロキシを利用してバックエンドとの通信を実現する
  *
  * @private
  * @memberof HttpClientService
  */
  private host: string = 'http://localhost:7777/';

  constructor(private http: HttpClient) { }
  /**
  * HTTP GET メソッドを実行する
  * (toPromise.then((res) =>{}) を利用する場合のコード)
  *
  * @returns {Promise<any[]>}
  * @memberof HttpClientService
  */
  public get(): Promise<any[]> {
    return this.http.get(this.host + '/', this.headers)
      .toPromise()
      .then((res) => {
        const response: any = res;
        return response;
      })
      .catch(this.errorHandler);
  }

  /**
  * REST-API 実行時のエラーハンドラ
  * (toPromise.then((res) =>{}) を利用する場合のコード)
  *
  * @private
  * @param {any} err エラー情報
  * @memberof HttpClientService
  */
  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

  // getDataList(){
  // console.log("======================");
  // console.log(this.getData());
  // console.log("======================");
  // return dataList;
  // }
}