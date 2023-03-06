import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrderApiService, OrdersSuccessResponse } from 'src/app/shared/services/order-api.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor( private orderService: OrderApiService ) {}

  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe((res: OrdersSuccessResponse) => {
      this.orders = res['orders'];
      console.log(this.orders)
    });
  }
}
