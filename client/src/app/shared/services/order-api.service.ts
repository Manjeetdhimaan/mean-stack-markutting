import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

export interface OrdersSuccessResponse {
  success: boolean;
  orders: Order[];
}

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  constructor(private http: HttpClient) { }

  postPlaceOrder(order:any) {
    return this.http.post(environment.apiBaseUrl + '/orders/post-order', order);
  }

  postOrderResponse(order:any) {
    return this.http.post(environment.apiBaseUrl + '/orders/post-order-response', order);
  }

  getUserOrders(): Observable<OrdersSuccessResponse> {
    return this.http.get<OrdersSuccessResponse>(environment.apiBaseUrl + '/orders/get-user-orders');
  }

  getUserOrder(orderId: string) {
    return this.http.get(environment.apiBaseUrl + '/orders/get-order/' + orderId);
  }
}
