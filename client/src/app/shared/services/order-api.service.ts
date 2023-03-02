import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  constructor(private http: HttpClient) { }

  postPlaceOrder(order:any) {
    return this.http.post(environment.apiBaseUrl + '/orders/post-order', order);
  }

  postOrderResponse(order:any) {
    return this.http.post(environment.apiBaseUrl + '/orders/postOrderResponse', order);
  }

  getUserOrders() {
    return this.http.get(environment.apiBaseUrl + '/orders/getUserOrders');
  }

  getUserOrder(orderId: string) {
    return this.http.get(environment.apiBaseUrl + '/orders/getUserOrder/' + orderId);
  }
}
